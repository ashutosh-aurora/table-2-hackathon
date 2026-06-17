#!/usr/bin/env node
/**
 * opencode-chat-bridge.js
 *
 * Bridges the Flexplainer chat UI to any local AI CLI.
 *
 * Usage:
 *   node opencode-chat-bridge.js
 *   Open: http://localhost:8787
 *
 * Env vars:
 *   OPENCODE_CLI          CLI executable  (default: opencode)
 *   OPENCODE_ARGS         Args template   (default: "run -")
 *                         Use {prompt} to inject prompt as a CLI arg instead of stdin.
 *                         Use - to pipe prompt to stdin.
 *   OPENCODE_TIMEOUT_MS   Max wait in ms  (default: 60000)
 *   PORT                  Server port     (default: 8787)
 *
 * PowerShell override example:
 *   $env:OPENCODE_CLI="claude"; $env:OPENCODE_ARGS="-p {prompt}"; node opencode-chat-bridge.js
 */

const http = require('http');
const { spawn } = require('child_process');
const fs   = require('fs');
const path = require('path');

const PORT     = parseInt(process.env.PORT              || '8787', 10);
const CLI      = process.env.OPENCODE_CLI               || 'opencode';
const ARGS_TPL = process.env.OPENCODE_ARGS              || 'run -';
const TIMEOUT  = parseInt(process.env.OPENCODE_TIMEOUT_MS || '60000', 10);
const HTML     = path.join(__dirname, 'flexplainer.html');

// ── Transcript builder ────────────────────────────────────────────────────────

function toTranscript(messages) {
    const lines = messages.map(m => {
        const role = m.role === 'system'    ? 'SYSTEM'
                   : m.role === 'assistant' ? 'ASSISTANT'
                   :                         'USER';
        return `${role}:\n${m.content}`;
    });
    lines.push('ASSISTANT:');
    return lines.join('\n\n');
}

// ── CLI runner ────────────────────────────────────────────────────────────────

function runCLI(transcript) {
    return new Promise((resolve, reject) => {
        const argTokens  = ARGS_TPL.split(/\s+/).filter(Boolean);
        const usePromptArg = argTokens.includes('{prompt}');
        const useStdin     = argTokens.includes('-') && !usePromptArg;

        const finalArgs = usePromptArg
            ? argTokens.map(t => t === '{prompt}' ? transcript : t)
            : argTokens.filter(t => t !== '-');

        console.log(`[bridge] spawn: ${CLI} ${finalArgs.map(a =>
            a.length > 60 ? a.slice(0, 60) + '…' : a).join(' ')}`);

        const child = spawn(CLI, finalArgs, {
            shell: process.platform === 'win32',
            env: process.env,
        });

        let stdout = '';
        let stderr = '';

        child.stdout.on('data', chunk => { stdout += chunk.toString(); });
        child.stderr.on('data', chunk => { stderr += chunk.toString(); });

        if (useStdin) {
            child.stdin.write(transcript, 'utf8');
            child.stdin.end();
        }

        const timer = setTimeout(() => {
            child.kill();
            reject(new Error(`CLI timed out after ${TIMEOUT}ms`));
        }, TIMEOUT);

        child.on('error', err => {
            clearTimeout(timer);
            if (err.code === 'ENOENT') {
                reject(new Error(
                    `CLI not found: "${CLI}". Set OPENCODE_CLI to the right command.`
                ));
            } else {
                reject(err);
            }
        });

        child.on('close', code => {
            clearTimeout(timer);
            if (code !== 0) {
                const detail = stderr.slice(0, 300).trim() || `exit code ${code}`;
                reject(new Error(`CLI failed (exit ${code}): ${detail}`));
            } else {
                resolve(stdout.trim());
            }
        });
    });
}

// ── HTTP server ───────────────────────────────────────────────────────────────

function cors(res) {
    res.setHeader('Access-Control-Allow-Origin',  '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

function json(res, status, body) {
    cors(res);
    res.writeHead(status, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(body));
}

const server = http.createServer((req, res) => {
    cors(res);

    // CORS preflight
    if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
    }

    // Serve HTML
    if (req.method === 'GET' && (req.url === '/' || req.url === '/index.html')) {
        try {
            const html = fs.readFileSync(HTML, 'utf8');
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(html);
        } catch (e) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('flexplainer.html not found next to bridge script.');
        }
        return;
    }

    // Chat endpoint
    if (req.method === 'POST' && req.url === '/api/chat') {
        let raw = '';
        req.on('data', chunk => { raw += chunk.toString(); });
        req.on('end', async () => {
            let messages;
            try {
                ({ messages } = JSON.parse(raw));
                if (!Array.isArray(messages) || messages.length === 0) throw new Error();
            } catch {
                json(res, 400, { error: 'Body must be { "messages": [...] }' });
                return;
            }

            const transcript = toTranscript(messages);
            console.log(`[bridge] ${messages.length} messages → CLI`);

            try {
                const response = await runCLI(transcript);
                console.log(`[bridge] ✓ response (${response.length} chars)`);
                json(res, 200, { response });
            } catch (err) {
                console.error(`[bridge] ✗ ${err.message}`);
                json(res, 500, { error: err.message });
            }
        });
        return;
    }

    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
});

server.listen(PORT, '127.0.0.1', () => {
    console.log(`\nFlexplainer bridge running`);
    console.log(`  UI:       http://localhost:${PORT}`);
    console.log(`  Endpoint: POST http://localhost:${PORT}/api/chat`);
    console.log(`  CLI:      ${CLI} ${ARGS_TPL}`);
    console.log(`  Timeout:  ${TIMEOUT}ms`);
    console.log(`\nOverride the CLI with env vars, e.g. PowerShell:`);
    console.log(`  $env:OPENCODE_CLI="claude"; $env:OPENCODE_ARGS="-p {prompt}"`);
    console.log(`  node opencode-chat-bridge.js\n`);
});
