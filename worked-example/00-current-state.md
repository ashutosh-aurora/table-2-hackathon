# Current state — today's three-product journey

A written description of what the current-state captures show, so this proof of concept stands on its
own (the screenshots themselves are kept local).

Today a client models a PPA for a hybrid solar asset across three separate products, entered one at a
time:

- **Solaris (Solar PV)** — define the solar site: location, capacities, the regional yield model and
  market scenario, and panel technology. Produces a solar generation/yield profile.
- **Chronos (Battery / hybrid)** — set the market scenario, the co-location configuration (e.g.
  solar-plus-storage), the storage specs, and the revenue stack. Defines the hybrid layout.
- **Lumus (PPA contract)** — configure the contract: market scenario, technology, volume structure
  (e.g. pay-as-produced), and dates.

The links between them are weak (these are the breaks the mock removes):

- **Solaris → Chronos:** the profile is sent and re-selected by name; its metadata is lost.
- **→ Lumus:** clients can't bring their own profile in; CS does it behind the scenes, or a generic
  profile is priced.
- **Dates:** Chronos uses the project CoD, Lumus the contract's own dates — different conventions, no
  cross-validation.

See `04-prototype/seamless-journey.html` for the coherent journey these three could be.
