# AGENTS.md

## Project Overview

This is a **static site generator for lecture notes** (Notebook). It converts Markdown files from `lectures/` into styled HTML pages with syntax highlighting, outputting them to `build/`.

## Tech Stack

- **Runtime:** Bun
- **Markdown:** marked
- **Syntax Highlighting:** Shiki (via marked-shiki)
- **LaTeX Rendering:** KaTeX (via marked-katex-extension)
- **Styling:** Custom CSS with Copernicus font

## Project Structure

```
notebook/
├── main.js          # Build script - processes markdown and generates HTML
├── layout.html      # HTML template with {content} placeholder
├── lectures/        # Source markdown files organized by course
│   ├── algebra-lineare/
│   └── so2/
├── static/          # Static assets (CSS, fonts) copied to build/
├── build/           # Generated output (gitignored)
└── package.json     # Dependencies and scripts
```

## Build Process

1. Cleans and recreates `build/` directory
2. Copies `static/` assets to `build/`
3. Processes each `.md` file in `lectures/`:
   - Parses markdown with GFM support
   - Renders LaTeX math (inline `$...$` and block `$$...$$`) via KaTeX
   - Highlights code blocks via Shiki
   - Wraps content in `layout.html` template
4. Generates `index.html` with links to all lectures

## Commands

- `bun run build` — Build the site
- `bun run serve` — Build and serve (requires additional setup)

## Conventions

### Markdown Content

- Lectures use standard GitHub Flavored Markdown (GFM)
- Math expressions use LaTeX syntax:
  - Inline: `$expression$`
  - Block: `$$expression$$`
- Code blocks specify language for syntax highlighting

### Code Style

- ES modules with top-level await
- Async/await for file processing
- Console output for build progress

## Adding New Lectures

1. Create a new `.md` file in the appropriate `lectures/` subdirectory
2. Run `bun run build` to generate the HTML

## Dependencies

- `marked` — Markdown parser
- `marked-shiki` — Shiki integration for code highlighting
- `marked-katex-extension` — KaTeX integration for LaTeX math
- `shiki` — Syntax highlighter
- `katex` — LaTeX math renderer
