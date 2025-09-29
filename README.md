# Highlands HandyHelp LLC Website

A polished single-page marketing site for Highlands HandyHelp LLC built with Next.js 15, Tailwind CSS 4, and TypeScript. The site highlights handyman services, showcases the team mission, and provides multiple contact touchpoints including a configurable Formspree-powered inquiry form.

## Tech Stack
- Next.js 15 (App Router, static rendering)
- Tailwind CSS 4 with design tokens and custom gradients
- TypeScript + ESLint for consistent authoring
- Local Inter variable font via `@fontsource-variable/inter`
- Optional Formspree integration for contact form submissions

## Getting Started
1. **Clone & install dependencies**
   ```bash
   npm install
   ```
2. **Configure environment variables**
   - Copy `.env.example` to `.env.local`.
   - Populate `NEXT_PUBLIC_FORMSPREE_ENDPOINT` with your Formspree form URL (leave blank to disable submissions during development).
3. **Run the development server**
   ```bash
   npm run dev
   ```
   Visit [http://localhost:3000](http://localhost:3000) to preview the site.

## Available Scripts
- `npm run dev` – start the local development server.
- `npm run build` – create an optimized production build (static output).
- `npm run start` – run the production build locally.
- `npm run lint` – execute ESLint across the project.

## Project Structure
```
public/                # Static assets (logo)
src/
  app/
    layout.tsx         # Global metadata & layout wrapper
    page.tsx           # Landing page composition
    globals.css        # Tailwind + global styling
  components/          # Reusable UI blocks (header, footer, contact form)
  config/site.ts       # Centralized site copy & data
.env.example            # Formspree config template
```

## Form Submissions
The contact form posts to Formspree when `NEXT_PUBLIC_FORMSPREE_ENDPOINT` is defined. Until configured, the UI guides visitors to call or email directly. Set up a Formspree form, copy its endpoint, and place it in `.env.local` prior to deployment.

## Deployment
This project is optimized for Vercel:
1. Push the repository to GitHub.
2. Create a new Vercel project and import the repo.
3. Add environment variables from `.env.local` in the Vercel dashboard.
4. Trigger a deployment – the Next.js build runs automatically and outputs static pages.

For other platforms, run `npm run build` and deploy the generated `.next` output with `npm run start` or your preferred static hosting solution.
