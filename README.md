# site-template

Frontend-only static site template for AWS Lambda (serverless).

---

> ### ⚠️ AI AGENT NOTICE — READ BEFORE MAKING ANY CHANGES
>
> This repository is a **fixed-stack template** used for AI-driven website generation.
>
> **Strict rules — do not violate:**
>
> 1. **Tech stack is fixed.** Do not add, remove, or swap any framework or library. The stack (React, TypeScript, Vite, Tailwind CSS, SST) is locked and must not change.
> 2. **No database in this phase.** Do not add any database driver, ORM, or DB connection code (e.g. Prisma, Drizzle, pg, mysql2, mongoose, SQLite). A database (RDS) will be provided in a future phase.
> 3. **Frontend pages only.** Only create or modify files under `src/`. Do not add backend Lambda handlers, API routes, or server-side logic.
> 4. **The entire application must be stateless.** This repo runs on AWS Lambda (serverless). No in-memory state, no file-system writes, no session storage on the server side. All state must live in the browser or in future external services.
> 5. **Run commands are fixed.** Do not modify `package.json` scripts. See the [Commands](#commands) section — the listed commands are the only ones permitted and must not be changed.

---

## Stack

> **FIXED — do not change.**

- React
- TypeScript
- Vite
- Tailwind CSS
- SST `StaticSite`
- AWS S3 + CloudFront (served via AWS Lambda / serverless infrastructure)

## Architecture

```txt
User
  ↓
CloudFront
  ↓
S3 static assets  ← this is the current phase (frontend only, stateless)
```

Future phases will extend this without changing the frontend structure:

```txt
User
  ↓
CloudFront
  ↓
Static React site
  ↓
API Gateway / Lambda  # future phase
  ↓
RDS / RDS Proxy       # future phase — DB will be provided externally
```

## Stateless requirement

Because the site runs on AWS Lambda (serverless), **the whole repository must be stateless**:

- No server-side sessions or in-memory caches.
- No writes to the local filesystem at runtime.
- No database connections in this phase.
- All dynamic data must be fetched from future external APIs or stored in the browser (localStorage, sessionStorage, cookies).

## Commands

> **FIXED — do not modify these scripts in `package.json`.**

<!-- AGENT: the commands below are fixed. do not rename, remove, or alter them. -->

Install dependencies:

```bash
npm install
```

Local development server:

```bash
npm run dev
```

Type-check and build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Lint the codebase:

```bash
npm run lint
```

Deploy to AWS (development stage):

```bash
npm run deploy -- --stage dev
```

Deploy to AWS (production):

```bash
npm run deploy -- --stage production
```

Remove a non-production stage:

```bash
npm run remove -- --stage dev
```

Production resources are protected in `sst.config.ts`.

## Environment variables

Frontend variables must start with `VITE_`.

Copy the example file:

```bash
cp .env.example .env.local
```

Current variables:

```txt
VITE_APP_NAME=site-template
VITE_API_BASE_URL=
```

`VITE_API_BASE_URL` is intentionally empty for phase 1. When a backend is added later, point it at the API URL.

## Project structure

```txt
src/
  components/     reusable UI components
  data/           editable site content
  lib/            config, API helpers, utilities
  pages/          page-level React views
```

## Template rules

> **For AI agents:** these rules are non-negotiable constraints, not suggestions.

- Keep phase 1 static and frontend-only.
- **Do not add DB packages** (no Prisma, Drizzle, pg, mysql2, mongoose, or any DB client).
- **Do not add backend Lambda handlers** or server-side code.
- **Do not modify run commands** in `package.json`.
- **Do not introduce stateful server-side logic** — the app must remain fully stateless.
- Keep API integration behind `src/lib/api.ts`.
- Keep copy/content in `src/data/site.ts` when possible.
- A future phase will introduce RDS; wait for that phase before adding any data-persistence logic.
