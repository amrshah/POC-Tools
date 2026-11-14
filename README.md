# POC Tools

A lightweight public collection of practical browser utilities and small AI experiments by Ali Raza.

**Live directory:** https://amrshah.github.io/POC-Tools/

## Principles

- Keep existing tools independently accessible at their existing URLs.
- Preserve working tool logic and processing behavior.
- Keep basic utilities browser-first and lightweight.
- Add discovery features (categories, search and navigation) independently from tool implementations.
- Add new capabilities incrementally, reusing existing processing logic wherever possible.
- Keep original source snapshots in `_archive/original-source-2026-11-14/` before substantial tool changes.

## Directory structure

- `index.html` — public tools directory.
- `tools.json` — tool metadata, categories, tags and status.
- `assets/css/directory.css` — directory-only presentation.
- `assets/js/main.js` — directory navigation, search and filtering.
- `tools/` — standalone tools. Existing tool pages remain independent.
- `_archive/original-source-2026-11-14/` — original root and tool source snapshots, excluded from normal Jekyll publication.

## Adding a tool

Add a registry entry to `tools.json` with:
- `name`, `description`, `link`, `icon`, `category`, `tags`, `status`.
- Optional `featured: true` for a featured tool.

Keep links relative and preserve existing URLs. Use one of the current categories where appropriate; introduce a new category only when it represents a meaningful collection.

## Change safety

Do not rewrite a working tool merely to match the directory design. Directory changes belong in the root directory files and the dedicated directory stylesheet/script. Tool behavior changes require a separate feature scope and regression checks. For additive enhancements, preserve the prior implementation in the archive and keep the existing workflow usable.

## Development

The directory is static-first and has no build step. Serve the repository root with any local static HTTP server to test it; direct file opening may block the registry fetch in some browsers.
