"""
Flexplainer proxy — bridges the browser prototype to the Anthropic API.

Usage:
    python proxy.py                        # reads ANTHROPIC_API_KEY from env
    python proxy.py sk-ant-YOUR-KEY-HERE   # pass key as argument

Then open flexplainer.html in your browser.
"""

import http.server
import json
import os
import sys
import urllib.request
import urllib.error

PORT = 3001

API_KEY = sys.argv[1] if len(sys.argv) > 1 else os.environ.get("ANTHROPIC_API_KEY", "")


class ProxyHandler(http.server.BaseHTTPRequestHandler):

    def log_message(self, fmt, *args):
        print(f"  {args[0]} {args[1]}")

    def send_cors(self):
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")

    def do_OPTIONS(self):
        self.send_response(200)
        self.send_cors()
        self.end_headers()

    def do_POST(self):
        if self.path != "/chat":
            self.send_response(404)
            self.end_headers()
            return

        if not API_KEY:
            self._error(500, "ANTHROPIC_API_KEY not set. Run: python proxy.py sk-ant-...")
            return

        length = int(self.headers.get("Content-Length", 0))
        body = self.rfile.read(length)

        req = urllib.request.Request(
            "https://api.anthropic.com/v1/messages",
            data=body,
            headers={
                "Content-Type": "application/json",
                "x-api-key": API_KEY,
                "anthropic-version": "2023-06-01",
            },
            method="POST",
        )

        try:
            with urllib.request.urlopen(req) as resp:
                result = resp.read()
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.send_cors()
            self.end_headers()
            self.wfile.write(result)
        except urllib.error.HTTPError as e:
            self._error(e.code, e.read().decode())
        except Exception as e:
            self._error(500, str(e))

    def _error(self, code, msg):
        body = json.dumps({"error": {"message": msg}}).encode()
        self.send_response(code)
        self.send_header("Content-Type", "application/json")
        self.send_cors()
        self.end_headers()
        self.wfile.write(body)


if __name__ == "__main__":
    if not API_KEY:
        print("⚠  No API key found.")
        print("   Run:  python proxy.py sk-ant-YOUR-KEY")
        print("   Or:   set ANTHROPIC_API_KEY=sk-ant-... && python proxy.py")
        print()
    else:
        print(f"✓  API key loaded (length {len(API_KEY)})")

    print(f"✓  Flexplainer proxy → http://localhost:{PORT}")
    print("   Open flexplainer.html in your browser, then Ask away.")
    print("   Ctrl+C to stop.\n")

    server = http.server.HTTPServer(("localhost", PORT), ProxyHandler)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nStopped.")
