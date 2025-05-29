<h1 align="center">
  <img src="./static/favicon.png" alt="Svelte Presentation Template Icon" width="128" height="128" description="Icon representing a dynamic presentation or a Svelte-based template structure.">
  <div align="center">Svelte Presentation Template</div>
</h1>

<div align="center">

[![Version](https://img.shields.io/badge/version-0.0.1-blue.svg)](https://github.com/Yrrrrrf/yrrrrrrf-project-pres/releases) <!-- Update link if you create releases -->
[![GitHub: Svelte Presentation Template](https://img.shields.io/badge/GitHub-Svelte%20Pres%20Template-181717?logo=github)](https://github.com/Yrrrrrf/yrrrrrrf-project-pres) <!-- Update with your actual repo link -->
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://choosealicense.com/licenses/mit/) <!-- Assuming MIT, update if different -->

</div>

## 🚀 Overview

The **Svelte Presentation Template** is a SvelteKit-based project designed for rapidly creating modern, interactive, and data-driven presentations. It provides a robust foundation with a focus on content management through a centralized data store, allowing users to easily customize presentation content without deep-diving into component logic.

The core idea is to separate presentation **data** (text, images, section configurations, icons) from the **presentation logic** (Svelte components that render the data). This makes it highly adaptable for various topics and presentation structures.

## ✨ Features

- **Data-Driven Content:** Easily manage all presentation text, lists, icons, and configurations from a central TypeScript store (`projectData.svelte.ts`).
- **Dynamic Section Rendering:** Add, remove, or reorder presentation sections by simply modifying the central data configuration.
- **Reusable Component Library:** Includes common presentation elements like headers, footers, expandable sections, info cards, data tables, progress bars, and risk matrices.
- **Svelte 5 & Runes:** Leverages the latest Svelte 5 features for fine-grained reactivity and clean component architecture.
- **Modern Styling:** Utilizes TailwindCSS and DaisyUI for a utility-first approach to styling, making theming and customization straightforward.
- **TypeScript Integration:** Full type safety across the project, ensuring data consistency and easier refactoring.
- **Easy to Extend:** Designed to be easily extensible with new section types or custom components.
- **Node.js Adapter:** Configured with `@sveltejs/adapter-node` for easy deployment as a standalone Node.js application (can be adapted for static hosting too).

## 🛠️ Technology Stack

### Frontend & Presentation Logic

- **[SvelteKit](https://kit.svelte.dev/)** - Full-stack Svelte framework for building web applications.
- **[Svelte 5](https://svelte.dev/blog/runes)** - The latest version of Svelte, featuring Runes for enhanced reactivity.
- **[TypeScript](https://www.typescriptlang.org/)** - Superset of JavaScript adding static types.
- **[Lucide Svelte](https://lucide.dev/guide/packages/lucide-svelte)** - Beautiful and consistent SVG icons.

### Styling

- **[TailwindCSS](https://tailwindcss.com/)** - Utility-first CSS framework.
- **[DaisyUI](https://daisyui.com/)** - Component library for TailwindCSS, providing pre-styled components and themes.

### Development & Build

- **[Vite](https://vitejs.dev/)** - Next-generation frontend tooling for fast development and optimized builds.
- **[Node.js](https://nodejs.org/)** - JavaScript runtime environment (used by Vite and the SvelteKit Node adapter).

## 🚦 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS version recommended, e.g., >=18.x or >=20.x)
- [npm](https://www.npmjs.com/) (comes with Node.js) or [pnpm](https://pnpm.io/) or [yarn](https://classic.yarnpkg.com/)

### Quick Start

```bash
# Clone the repository
git clone https://github.com/Yrrrrrf/yrrrrrrf-project-pres.git <!-- Update with your actual repo link -->
cd yrrrrrf-project-pres

# Install dependencies
npm install
# or pnpm install
# or yarn install

# Start the development server
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview
```

## 🎨 Customizing Your Presentation

The power of this template lies in its data-driven nature. To create your own presentation:

1.  **Edit `src/lib/stores/projectData.svelte.ts`:**
    *   This is the **main configuration file**.
    *   Update `siteHtmlTitle`, `header`, `footer`, and `pageIntro` sections with your project's details.
    *   Modify the `sections` array:
        *   Adjust the `title`, `icon`, and `defaultExpanded` status for each section.
        *   Most importantly, update the `content` object for each section according to its `type` (e.g., `executive-summary`, `objectives`, `risks`). The types for each section's content are defined in `src/lib/types/project.ts`.
        *   You can reorder sections, remove sections, or duplicate existing section structures with new content.
    *   Ensure any icons you wish to use are imported from `lucide-svelte` within this file and wrapped with the `createIcon` helper.

2.  **Define Types in `src/lib/types/project.ts`:**
    *   If you introduce new structures within your `projectData.svelte.ts`, ensure corresponding types are defined or updated here for type safety.

3.  **Adjust Styling (Optional):**
    *   **Global Theme:** Modify `tailwind.config.js` to change DaisyUI themes (`daisyui.themes` and `daisyui.darkTheme`).
    *   **Custom CSS:** Add custom styles to `src/style.css` if needed, though leveraging Tailwind utility classes is preferred.
    *   **Component-Specific Styles:** For fine-grained control, Tailwind classes can be applied directly within Svelte components, or even driven by data from `projectData.svelte.ts` (e.g., `bgColorClass`).

4.  **Static Assets:**
    *   Place images or other static files in the `static/` directory. They can be referenced in `projectData.svelte.ts` (e.g., for logos or image paths in content) using a base path like `/favicon.png`.

## 📚 Documentation & Further Customization

-   **Understanding Data Structures:** Refer to `src/lib/types/project.ts` for the expected data shape for each presentation section.
-   **Adding New Section Types:**
    1.  Define the new content type in `src/lib/types/project.ts` and add it to the `SectionContent` union.
    2.  Create a new Svelte component in `src/lib/components/sections/` to render this new content type.
    3.  Update `src/routes/+page.svelte` to handle the new `section.content.type`.
    4.  Export the new section component from `src/lib/components/sections/index.ts`.
-   **Component Reference:** Explore `src/lib/components/` to understand the reusable layout, content, and visualization components available.

## 🔁 Development Workflow (Using the Template)

1.  **Plan Your Presentation Structure:** Decide on the sections and content you need.
2.  **Populate Data:** Edit `src/lib/stores/projectData.svelte.ts` with your presentation's information.
3.  **Customize Icons & Styles:** Update icons in `projectData.svelte.ts` and adjust themes/styles in `tailwind.config.js` or `style.css` as needed.
4.  **Preview Changes:** Run `npm run dev` and iterate on your content and styling.
5.  **Build & Deploy:** Once satisfied, run `npm run build` and deploy the output from the `.svelte-kit/output/` directory (for `adapter-node`) or configure a different SvelteKit adapter if needed.

## 📄 License

This project is licensed under the MIT License - see the [`LICENSE`](LICENSE) file (you'll need to create one, typically with the standard MIT license text) for details.

## 👥 Contributing

Contributions to improve this template are welcome! Please feel free to submit a Pull Request.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

<div align="center">

[![SvelteKit](https://img.shields.io/badge/Built%20with-SvelteKit-FF3E00?logo=svelte&logoColor=white)](https://kit.svelte.dev/)
[![Svelte 5](https://img.shields.io/badge/Svelte-5%20(Runes)-FF3E00?logo=svelte&logoColor=white)](https://svelte.dev/blog/runes)
[![TailwindCSS](https://img.shields.io/badge/Styled%20with-TailwindCSS-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![DaisyUI](https://img.shields.io/badge/Components-DaisyUI-5A0EF8?logo=daisyui&logoColor=white)](https://daisyui.com/)
[![Vite](https://img.shields.io/badge/Powered%20by-Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/Typed%20with-TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

</div>