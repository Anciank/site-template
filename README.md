# site-template

Frontend-only static site template for AWS.

This repository is intentionally **frontend only** for phase 1. It has no database, no backend Lambda, and no server runtime. The deploy target is a static website served by Amazon S3 and CloudFront through SST.

## Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- SST `StaticSite`
- AWS S3 + CloudFront

## Architecture

```txt
User
  ↓
CloudFront
  ↓
S3 static assets
```

Future phases can add API Gateway / Lambda / RDS without changing the frontend structure too much:

```txt
User
  ↓
CloudFront
  ↓
Static React site
  ↓
API Gateway / Lambda  # future
  ↓
RDS / RDS Proxy       # future
```

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy to AWS

Make sure AWS credentials are configured locally, then run:

```bash
npm run deploy -- --stage dev
```

Production:

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

- Keep phase 1 static.
- Do not add DB packages yet.
- Do not add backend Lambda code yet.
- Keep API integration behind `src/lib/api.ts`.
- Keep copy/content in `src/data/site.ts` when possible.
