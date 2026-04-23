# Let Me Ask Charlie (DH2323)

Course project repo for **DH2323** (KTH) by **Ashmit Deb Roy**.

- **Blog (GitHub Pages)**: `https://ashmitroy.github.io/dh2323-charlie-chat/`
- **Repo**: `https://github.com/ashmitroy/dh2323-charlie-chat`

## Project status
- Repo structure is being enforced (blog-only `docs/`, game-only `src/`).
- Game source lives under `src/`.
- Report drafts live under `report/`.

## Folder structure (enforced)
```
dh2323-charlie-chat/
├─ docs/              ← GitHub Pages blog only
│  ├─ index.html
│  ├─ css/
│  └─ js/
├─ src/               ← Game source only
│  ├─ index.html      ← p5.js game entry point
│  ├─ shaders/        ← All GLSL .frag and .vert files
│  ├─ js/             ← Game logic, state machine, scenes
│  └─ assets/         ← Sprites, normal maps, audio
├─ report/            ← Scientific report drafts (markdown)
├─ ai-log.md          ← AI usage log (update weekly)
└─ README.md
```

## Setup (local dev)
This project is designed to be a static site (no build step required).

### Option A: VS Code 
- Open `src/index.html` in Live Server.

### Option B: Python HTTP server
From repo root:

```bash
python3 -m http.server 8000
```

Then open:
- Game: `http://localhost:8000/src/`
- Blog: `http://localhost:8000/docs/`

## Deployment notes
- `docs/` is the **only** directory served by GitHub Pages (blog).
- Do **not** put game source files in `docs/`.

## Before pushing to `main`
- Run the game locally and confirm it loads without console errors.
- Verify the blog still renders from `docs/`.