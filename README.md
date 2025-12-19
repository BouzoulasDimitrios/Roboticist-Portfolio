<div align="center">

# Robotics Portfolio

Interactive engineering portfolio built with Next.js 15, React 19, and Tailwind CSS.  
Showcases robotics projects, work history, CAD models rendered with Three.js, and contact channels.

</div>

---

## ✨ Features

- **Hero overview** with profile photo, highlighted description, and interactive Tesla Model 3 CAD viewer powered by `@react-three/fiber`.
- **Projects & CAD models** pages with sticky navigation sidebars for quick jumps to each card, plus preview imagery for every entry.
- **Reusable CAD viewer** that accepts custom camera positions/targets and (optionally) displays live orientation data for tuning.
- **Work experience, competitions, and patents** sections styled consistently with card previews for rapid scanning.
- **Contact page** mirroring the hero card aesthetic, including structured links to major platforms (LinkedIn, GitHub, GrabCAD, Google Scholar, YouTube, etc.).
- **Sticky top navigation bar** that remains accessible while scrolling through long content.

---

## 🧱 Tech Stack

| Layer        | Details                                                                 |
|--------------|-------------------------------------------------------------------------|
| Framework    | [Next.js 15](https://nextjs.org/) with the App Router (`app/` directory) |
| Language     | TypeScript + React 19                                                   |
| Styling      | Tailwind CSS + custom utility classes in `src/app/globals.css`          |
| 3D Rendering | `three`, `@react-three/fiber`, `@react-three/drei`                      |
| Tooling      | ESLint 9, TypeScript 5, Vite-based Next dev server                      |

---

## 🚀 Getting Started

```bash
# install deps
npm install

# start dev server
npm run dev

# run linter
npm run lint

# build for production
npm run build
npm run start
```

Open [http://localhost:3000](http://localhost:3000) once the dev server is running.

---

## 📁 Project Structure

```
src/
├─ app/
│  ├─ layout.tsx            # Root layout, global navbar and padding
│  ├─ page.tsx              # Homepage shell
│  ├─ projects/             # Projects listing + dynamic routes
│  ├─ cad-models/           # CAD models listing with sticky sidebar
│  └─ contact/              # Contact card page
├─ components/
│  ├─ home/Homepage.tsx     # Main homepage component
│  ├─ projects/ProjectCard.tsx
│  ├─ cad/CADViewer.tsx     # Shared 3D viewer wrapper
│  └─ Navbar.tsx
└─ data/
   ├─ cadModels.ts          # CAD entries shared across pages
   └─ app/data/projects.tsx # Projects metadata (slugs, descriptions, etc.)
```

CAD assets live under `public/models/*.glb`, while preview imagery sits in `public/images/`.

---

## 🛠 Customization Tips

- **Projects/CAD entries:** Edit the arrays in `src/app/data/projects.tsx` and `src/app/data/cadModels.ts` to add real content, publish flags, and `.glb` paths.
- **Hero CAD orientation:** Adjust `HERO_CAD_CAMERA_POSITION` and `HERO_CAD_TARGET` in `src/components/home/Homepage.tsx`. Enable `showCameraDebug` on `CADViewer` temporarily to record preferred values.
- **Contact info:** Update `contactDetails` in `src/app/contact/page.tsx` with your actual email, handles, and locations.
- **Homepage sections:** Each chunk (Projects, Work Experience, Competitions, Patents) is a simple mapping over arrays near the top of `src/components/home/Homepage.tsx`. Remove a section by deleting its `<h2>` and `<section>` pair, or add new cards by pushing entries into the corresponding arrays. Wrap new sections in `project-card` containers for consistent styling.
- **Styling tweaks:** Tailwind utility classes live in components; global helpers and `project-card` rules are in `src/app/globals.css`.

---

## 📦 Deployment

Deploy anywhere that supports Next.js with Node 18+. Popular choices:

1. **Vercel** – zero-config, preview deployments, edge caching.
2. **Netlify** – Next support with SSR adapters.
3. **Docker** – build your own container from the included Dockerfile (if enabled).

Ensure `npm run build` succeeds locally before deploying for best results.

---

## 🤝 Contributing / Feedback

While this repository is primarily a personal portfolio, feel free to open issues or pull requests if you spot bugs or have enhancements to suggest. For collaboration inquiries, use the contact links on the `/contact` page.

---


## Resources

Tesla model .glb file: [link](https://sketchfab.com/3d-models/tesla-2018-model-3-5ef9b845aaf44203b6d04e2c677e444f)

---

Happy building! 🚀


