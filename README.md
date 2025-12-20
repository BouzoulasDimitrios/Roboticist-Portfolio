<div align="center">

# Engineer Portfolio

Interactive engineering portfolio built with Next.js 15, React 19, and Tailwind CSS.  
Showcases projects, experience, CAD models rendered with Three.js, and contact channels.
The published website functions as a template allowing anyone to pull the code, update the content, and publish it without needing additional development.

</div>

---
# Demo gif:

<p align="center">

<img src="./readme_resources/website.gif" width = 90%> 

</p>




---

## ✨ Features

- **Hero overview** with profile photo, highlighted description, and an interactive CAD viewer powered by `@react-three/fiber`.
- **Projects & CAD models** pages with sticky navigation sidebars for quick jumps to each card, plus preview imagery.
- **Reusable CAD viewer** that accepts custom camera positions/targets and (optionally) displays live orientation data for tuning.
- **Experience, competitions, publications, education, and patents** sections styled consistently with card previews for rapid scanning.
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

## 🛠 Updating Content

Use the files below to personalize the template. No additional backend or CMS is required.

### Homepage

- **Hero text + profile image + featured CAD viewer:** `src/components/home/Homepage.tsx`
  - Replace the headline and bio text.
  - Swap the profile image path (`PROFILE_IMAGE`) with your own image in `public/images/`.
  - Update the hero CAD viewer by changing `modelPath`, `cameraPosition`, `target`, or `scale`.
- **Homepage sections (projects, experience, competitions, publications, education, patents):**
  - Each section is a mapped array in `src/components/home/Homepage.tsx`.
  - Add/remove cards by editing the arrays and keeping the `<h2>` + `<section>` pair intact.

### Projects Page

- **Project list content:** `src/app/data/projects.tsx`
  - Update `title`, `description`, `externalUrl`, and `imageUrl`.
  - Slugs must match the route: `/projects/<slug>`.
- **Project detail pages:** `src/app/projects/[slug]/content/*.tsx`
  - Replace placeholder content with full write‑ups, images, and links.

### CAD Models Page

- **CAD model cards + camera settings:** `src/app/data/cadModels.ts`
  - Update `title`, `description`, `modelPath`, and optional `cameraPosition`, `target`, `scale`.
  - `.glb` files live in `public/models/`.
- **Viewer behavior:** `src/components/cad/CADViewer.tsx`
  - Adjust overlay styling, loading text, and camera debug defaults.

### Contact Page

- **Contact details:** `src/app/contact/page.tsx`
  - Edit `contactDetails` with your email, handles, and profiles.
  - Replace the placeholder avatar with an image (optional).

### Styling

- **Global styles:** `src/app/globals.css`
  - `project-card` and `quick-link-btn` classes control the card and CTA styling.

## 🛠 Customization Tips

- **Projects/CAD entries:** Edit the arrays in `src/app/data/projects.tsx` and `src/app/data/cadModels.ts` to add real content, publish flags, and `.glb` paths.
- **Hero CAD orientation:** Adjust `HERO_CAD_CAMERA_POSITION` and `HERO_CAD_TARGET` in `src/components/home/Homepage.tsx`. Use the in‑viewer camera readout to capture ideal values.
- **Homepage sections:** Each chunk is a simple mapping over arrays near the top of `src/components/home/Homepage.tsx`.

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

Sample `.glb` files can be placed in `public/models/` and referenced in `src/app/data/cadModels.ts`.

---

Happy building! 🚀

