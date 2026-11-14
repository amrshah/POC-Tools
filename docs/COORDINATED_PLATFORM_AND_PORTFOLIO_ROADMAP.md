# POC Tools + Portfolio + GitHub Profile
## Coordinated Audit & Implementation Roadmap

**Prepared:** 2026-11-14  
**Repositories:** `amrshah/POC-Tools`, `amrshah/amrshah.github.io`, `amrshah/amrshah`  
**Status:** Planning baseline — no application code changed by this audit.

---

## 1. Product direction

Position POC Tools as a **public engineering lab**: a useful collection of browser tools, practical AI demonstrations, reusable skills/workflows, and small experiments in agent interoperability.

**Positioning:** Practical Tools. AI Experiments. Reusable Capabilities.

This is not intended to become a conventional portfolio or a collection of disconnected demos. It should make the engineering work tangible: visitors can use tools, inspect examples, understand the underlying capabilities, and see how those capabilities can be exposed through multiple interfaces.

### Three connected public surfaces

| Surface | Primary job |
|---|---|
| POC Tools (GitHub Pages) | Public lab, useful utilities, interactive demonstrations |
| Personal portfolio (GitHub Pages) | Professional narrative, selected work, case studies and R&D |
| GitHub profile README | Concise technical identity and entry point to repositories |

The three surfaces should cross-link, but each should have a distinct purpose.

---

## 2. Repository audit

### A. `amrshah/POC-Tools`

**Current state**
- Public static GitHub Pages site; default branch is `main`.
- Directory data is stored in root `tools.json` and rendered by `assets/js/main.js`.
- The landing page is currently branded “Web Goodies” and is a basic card grid.
- Tool pages are mostly standalone HTML/CSS/JavaScript.
- Existing tools include AI Strategy Suggestion (standard and multilingual), AEO Dashboard mockup, AI Landing Page Optimizer, Image Text Extractor, Image Optimizer, Image Converter, Image Background Remover, QR Generator, Markdown Previewer and Persona Creator.
- The Image Optimizer uses browser Canvas APIs and supports a single image per run. It has no batch queue or ZIP export.
- Some tools already call Cloudflare Workers. The AI Strategy tool calls `my-ai-models.amr-shah.workers.dev`; the AI Landing Page Optimizer references Worker endpoints as well.

**Issues to address**
- Tool registry has only basic name, description, link and icon fields; category metadata is inconsistent.
- No search, category filters, status labels, capability details or common navigation.
- Tool pages have inconsistent design and navigation.
- No common contract for inputs, outputs, errors, capability metadata or supported interfaces.
- Some UI output is interpolated into `innerHTML`; output rendering and input validation need a security review.
- AI endpoints and model/provider assumptions are embedded in individual pages. Existing Workers must be inventoried before any migration.
- Image Optimizer has functional gaps: aspect-ratio handling, synchronized dimensions, batch processing, robust blob/error handling, object URL lifecycle and transparent-image conversion behavior.
- README is effectively empty and does not explain the project or how to contribute.

**Direction**
Keep the site static-first and browser-friendly. Improve the existing registry instead of replacing all tools with a framework migration. Preserve the low-friction, no-account experience for basic browser utilities.

### B. `amrshah/amrshah.github.io`

**Current state**
- Default branch is `master`.
- The root `index.html` is a self-contained static portfolio with a coherent visual system, responsive layout, selected work, experience, about, education and contact sections.
- Current work cards include Agentic Software Development Pipeline, OrmEasy OS, Laravel Tenant Engine, ClinicFlow Vet and NFV.
- A GitHub Actions workflow deploys the root HTML and portrait image to GitHub Pages on pushes to `master`.
- The workflow currently watches only `index.html`, `assets/images/**` and its own workflow file.
- The portfolio already has an honest maturity-label approach (R&D, In development, Open source, Prototype, Draft).

**Issues to address**
- POC Tools is not represented as a flagship public engineering initiative.
- Alamia Skills, Antigravity Skills/workflows and Alamia 360 are not adequately represented.
- The current selected-work section is a small manually maintained set; it needs stronger case-study links and live-demo links.
- Several project links and labels should be verified against current repository names and actual project maturity before publishing.
- The repository previously had a React/Vite + SQLite CMS under `singularity-cms`, but merged PR #5 deliberately retired that CMS and replaced the public site with a static portfolio. The active `master` branch deploys the root `index.html` and required profile image through GitHub Actions. The remaining `how-to-guide.md` was stale and still described the retired CMS, manual dist-copy deployment and a `main` branch. The housekeeping fix is to replace that guide and add a current repository README; no framework migration or new build system is required.

**Direction**
Retain the current visual identity and lightweight deployment unless a verified source/build audit proves a migration is needed. Improve the narrative and evidence first; do not rewrite the site just for technology fashion.

### C. `amrshah/amrshah` (GitHub profile README)

**Current state**
- Default branch is `main`.
- Root `README.md` describes you as a product-focused technical architect/backend systems engineer.
- It highlights older multi-agent orchestration research and legacy professional experience snapshots.

**Issues to address**
- The profile is not aligned with your current Senior Software Development Manager / Operations Manager role and product R&D responsibilities.
- Alamia Skills, Antigravity Skills, Alamia 360, POC Tools, MCP and WebMCP are missing or underrepresented.
- It reads more like a historical capability summary than a current, evidence-backed profile.

**Direction**
Rewrite it as a concise, current professional profile. Lead with technical leadership and product engineering, then show selected systems, public demonstrations and research. Keep experimental work explicitly labelled as research/prototype.

---

## 3. Information architecture for POC Tools

Preserve the existing lightweight POC Tools design and direct-to-tool experience. This is an incremental information-architecture improvement, not a visual rebuild or SaaS dashboard. Keep the existing card/grid feel, restrained styling, fast static delivery and direct links to standalone tools. Add only the missing discovery/navigation features.

Use four top-level collections:

1. **Tools** — practical browser utilities and AI tools people can use immediately.
2. **Skills & Workflows** — Alamia Skills, Antigravity Skills, agent instructions and reusable workflows, with small runnable examples.
3. **Alamia 360 Lab** — capability discovery and interoperability demonstrations.
4. **Experiments** — selected prototypes and R&D notes, clearly marked experimental.

The homepage should include:
- A concise positioning statement and clear “Explore tools” entry point.
- A compact left sidebar on desktop for collection/category navigation; collapse it into a simple drawer/menu on mobile rather than permanently consuming small-screen space.
- Search near the top of the tool listing, filtering tool names, descriptions and tags client-side.
- Category filters that work alongside search, with a clear “All tools” reset.
- Keep the main content area as a lightweight responsive card grid; do not add dashboard widgets, user accounts, heavy animation or complex app-shell behavior.
- Featured practical tools (Image Optimizer first).
- Featured AI/skills demonstrations.
- A small Alamia 360 research feature.
- Search and category filters.
- Clear maturity labels: Stable, Beta, Experimental, Mockup.
- Links to source repositories, documentation and the personal portfolio.

Avoid a large generic dashboard or over-designed marketing site. The directory must remain quick to load and easy to use.

---

## 4. Shared Capability Registry

Introduce a versioned, static-first registry as the common description of each capability. Keep the registry data separate from presentation and runtime adapters.

A capability record should describe:
- Stable capability ID and display name.
- Short description and category.
- Maturity/status and owner/source repository.
- Input schema and output schema.
- Execution mode: browser, remote API, or hybrid.
- Supported interfaces: web UI, REST, MCP, WebMCP.
- Limits, privacy notes and whether data leaves the browser.
- Demo URL and documentation/source URL.

**Important:** A registry entry declaring an interface does not mean that interface is implemented. Track implementation status separately for each adapter.

Build one capability first and prove it through more than one interface before generalizing the registry.

---

## 5. MCP, WebMCP and REST demonstrations

### MCP
Host remote MCP endpoints on Cloudflare Workers (or another suitable backend). GitHub Pages itself is static hosting and cannot host a persistent MCP server process.

### WebMCP
Add progressive browser-side WebMCP demonstrations to selected tool pages where supported. Keep normal human controls fully functional when WebMCP is unavailable. The API and browser standard are evolving; do not make the entire site dependent on experimental browser support.

### REST
Expose selected capabilities through a small versioned Worker API. REST is useful for ordinary integrations and forms the practical bridge between static pages and remote agent interfaces.

### First demonstration
Choose a small, deterministic operation (not a complex AI workflow) and expose the same capability through:
1. A normal web UI.
2. A REST endpoint.
3. An MCP tool.
4. A WebMCP browser tool where supported.

Show the request, input schema, output and execution path in a Capability Explorer. This is the clearest demonstration of the Alamia 360 “USB-C port” concept.

---

## 6. Cloudflare AI and existing Worker inventory

Before building new AI infrastructure:
1. Inventory all Worker URLs referenced by current tools.
2. Identify source repositories, deployed code, provider/model, secrets, quotas, CORS policy, logs and owners.
3. Verify which endpoints are live and which are obsolete.
4. Reuse sound existing implementations; consolidate only where there is a clear operational benefit.

Target architecture:
- **GitHub Pages:** static UI and browser-side processing.
- **Cloudflare Workers:** API gateway, validation, CORS, rate limiting, usage controls and provider routing.
- **Workers AI:** inference for suitable AI tools, subject to current model availability, task quality and free allocation.
- **MCP adapter:** expose approved capabilities to remote AI clients.
- **R2 / Queues / D1:** introduce only when a demonstrated requirement justifies storage, asynchronous processing or durable usage/account records.

Do not send image optimization to an AI model. Keep image transformations client-side initially. Do not assume every AI tool should use Workers AI; benchmark model quality and latency per task.

Free-tier policy:
- Treat free quotas as a prototype/early-usage budget, not unlimited production capacity.
- Enforce per-IP or per-session rate limits and request-size limits.
- Set per-tool daily budgets and graceful quota-exhaustion responses.
- Keep provider credentials server-side.
- Add usage telemetry without collecting unnecessary personal data.
- Avoid login, subscriptions and payment systems until usage and demand justify them.

---

## 7. Coordinated implementation phases

### Phase 0 — Baseline and decisions
- Verify current deployed Pages content and GitHub Pages settings.
- Inventory all POC Tools pages, Worker endpoints and external dependencies.
- Verify portfolio source-of-truth, deployment workflow, and actual current project links.
- Confirm the profile README and current professional positioning.
- Record screenshots and baseline performance/accessibility checks.

**Exit criteria:** no unknown deployment path, no unverified project links in the proposed redesign, and a documented Worker inventory.

### Phase 1 — POC Tools public experience
- Refresh branding, navigation, homepage and footer.
- Extend `tools.json` into a validated capability/tool registry (or introduce a separate versioned registry file).
- Add categories, search, maturity labels and featured tools.
- Establish shared page styles and navigation conventions without forcing every tool into a full rewrite.
- Improve README and contributor/deployment documentation.
- Preserve current URLs where possible.

**Exit criteria:** the directory is coherent, responsive, searchable, and existing tool links still work.

### Phase 2 — Practical tool quality
- Refactor Image Optimizer processing logic.
- Add multi-file queue, per-file progress/status and ZIP download.
- Fix aspect ratio and dimension synchronization.
- Add clear format/alpha handling and robust failure states.
- Review all tool pages for unsafe HTML rendering, validation, accessibility and mobile behavior.
- Add lightweight browser tests for critical flows.

**Exit criteria:** batch image optimization works reliably in-browser on a representative test set, with no server requirement for basic use.

### Phase 3 — AI Worker foundation
- Inventory and verify existing Workers.
- Standardize request/response contracts and error handling.
- Add rate limiting, quota controls, CORS policy and safe input limits.
- Route selected AI tools through a common API facade.
- Test Workers AI models against each task before switching providers.

**Exit criteria:** at least one AI tool is reliably served through a documented, observable and quota-protected Worker endpoint.

### Phase 4 — Alamia Skills and workflow demonstrations
- Feature selected Alamia Skills and Antigravity Skills.
- Build two or three compact interactive demonstrations.
- Each demo should explain the problem, show inputs and outputs, link to the underlying skill/workflow, and clearly label experimental behavior.

**Exit criteria:** visitors can run or inspect useful examples rather than only reading descriptions.

### Phase 5 — Alamia 360 interoperability demonstration
- Define the first capability contract.
- Implement web UI and REST.
- Expose the same capability through MCP.
- Add WebMCP progressive enhancement where browser support permits.
- Build a Capability Explorer that makes the shared contract visible.

**Exit criteria:** a single capability is demonstrably callable through multiple interfaces with consistent input/output semantics.

### Phase 6 — Personal portfolio and GitHub profile
- Add POC Tools as a flagship public engineering lab.
- Add Alamia Skills, Antigravity Skills/workflows and Alamia 360 as evidence-backed work.
- Add short case studies: problem, design, implementation, trade-offs, current maturity and live demo.
- Verify every public link and project status.
- Update GitHub profile README with current role, selected work and links to the demonstrations.
- Align metadata, social previews and navigation across all three surfaces.

**Exit criteria:** all surfaces tell the same accurate story and link visitors to working evidence.

### Phase 7 — Measure before monetizing
- Add privacy-conscious analytics for visits, tool launches, successful operations and errors.
- Measure repeat use and AI inference cost.
- Consider ads, paid plans or API usage billing only after there is demonstrated traffic and a real cost/value boundary.
- Keep basic browser utilities free and frictionless.

**Exit criteria:** monetization decisions are based on actual usage and cost data, not assumptions.

---

## 8. Initial demonstration shortlist

| Priority | Demonstration | Why |
|---|---|---|
| P0 | Image Optimizer batch mode | Existing user value and strongest practical tool |
| P1 | AI Strategy tool on verified Worker API | Reuses an existing AI workflow |
| P1 | Skill-driven repository/project audit | Makes Alamia/Antigravity Skills tangible |
| P2 | Capability Explorer | Makes Alamia 360 understandable |
| P2 | One capability via UI + REST + MCP + WebMCP | Proves the interoperability thesis |

Do not build all demonstrations simultaneously. Ship one useful, polished slice at a time.

---

## 9. Guardrails

- Do not turn the public lab into a large SaaS platform before validating demand.
- Do not migrate away from GitHub Pages just to gain a backend; add Workers only where server-side execution is needed.
- Do not rewrite every tool or force a single frontend framework onto standalone utilities.
- Do not publish private client/company work, credentials, internal architecture or sensitive operational details.
- Distinguish personal R&D from employer-owned or client-owned work; publish only what is appropriate to share.
- Label prototypes honestly. Avoid unsupported performance or conversion claims.
- Keep the personal portfolio focused on professional narrative; let POC Tools carry the deeper interactive demonstrations.
- Avoid duplicating project descriptions across sites; link to one canonical case study or repository where possible.

---

## 10. Immediate execution order

1. Complete Phase 0 inventory, especially Worker endpoint ownership and the portfolio build-source mismatch.
2. Implement Phase 1 homepage/registry redesign in POC Tools.
3. Deliver Image Optimizer batch mode as the first polished tool improvement.
4. Integrate one verified AI tool with the common Worker API contract.
5. Build the first Alamia 360 multi-interface demonstration.
6. Update the portfolio and GitHub profile with working links and case studies.

**Decision principle:** the public experience should lead with useful tools; the R&D story should be demonstrated through small working examples; the portfolio should explain why the work matters.
