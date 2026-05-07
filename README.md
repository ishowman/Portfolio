# Personal Portfolio

A clean, responsive, and highly interactive personal developer portfolio built to showcase projects, skills, and write-ups.

## Tech Stack

- **Framework:** React + Vite
- **Styling:** Tailwind CSS
- **Components:** shadcn/ui
- **Icons:** Lucide React & React Icons
- **Routing:** React Router v6
- **Animations:** Framer Motion

## Features

- **Modern UI:** Clean, minimalist design with a focus on typography, spacing, and subtle border-dashed aesthetics.
- **Dynamic Project Routing:** Individual detail pages for each project (`/projects/:slug`) containing deep-dives, tech stacks, and features.
- **Dark/Light Mode:** Seamless theme switching utilizing Tailwind and CSS variables.
- **Responsive:** Fully optimized for mobile, tablet, and desktop viewports.
- **Centralized Data:** Easily update the portfolio by editing `projects.ts`, `tech.ts`, and `socials.ts`.

## Local Development

1. Clone the repository
2. Install dependencies (the project uses `bun`, but `npm` or `yarn` work too):
   ```bash
   bun install
   ```
3. Start the development server:
   ```bash
   bun run dev
   ```

## Project Structure

- `src/components/`: Reusable UI components (Hero, ProjectCard, Navbar) and base `shadcn/ui` elements.
- `src/pages/`: Top-level route components (Home, Projects, ProjectDetail, Blog, Contact).
- `src/data/`: Centralized data definitions for your portfolio content.
- `src/providers/`: Context providers (e.g., ThemeProvider for dark mode).
