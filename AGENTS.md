# Project agent memory

This file is the project's committed home for project-intrinsic agent knowledge: build, test, release, architecture, and sharp-edge notes that should travel with the code.

- Add durable project-specific notes here as they are discovered through real work.
- Blog editor: `src/content/blog/*.md` uses a block-based `blocks:` field (heading/text/image/image-row/quote), rendered via `src/components/blog/BlockRenderer.astro`. Schema lives in `src/content/config.ts`. Text blocks render markdown through `marked`.
- Decap CMS admin lives at `/admin` (`public/admin/config.yml`, `local_backend: true`). To test locally: run `astro dev`, and run `npx decap-server` for the git-gateway proxy — pin `npx decap-server@3.10.0` (or another pre-3.11 version); `decap-server@3.11.1`'s package.json uses a pnpm `catalog:` dependency reference that plain `npm`/`npx` cannot resolve (`EUNSUPPORTEDPROTOCOL`).
- `sharp` (Astro's default image service) is an optional native dependency; if `npm install` silently fails to build it (no `node_modules/sharp`), run `npm install sharp --no-save` again — it typically succeeds on retry in this environment.

## Maintaining this file

Keep this file for knowledge useful to almost every future agent session in this project.
Do not repeat what the codebase already shows; point to the authoritative file or command instead.
Prefer rewriting or pruning existing entries over appending new ones.
When updating this file, preserve this bar for all agents and keep entries concise.
