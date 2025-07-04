# Wayne Hlatywayo - Personal Portfolio & Digital CV

![Portfolio Screenshot](https://github.com/BioCoder-hla/Hlatywayo-Tinotenda-portfolio/blob/main/portfolio%20image.png)

Welcome to the source code for my personal portfolio website. This project is a comprehensive digital resume and a showcase of my skills in web development, bioinformatics, and data analysis. It was built from the ground up to be a fast, modern, and fully responsive single-page application.

**Live Site:** [**[TODO: Add your live portfolio URL here]**](https://[TODO: Add your live portfolio URL here])

---

## 🚀 About This Project

This portfolio is more than just a list of my experiences; it's a demonstration of my front-end development capabilities. The goal was to create a professional, clean, and highly performant site that effectively communicates my unique background at the intersection of life sciences and technology.

### Key Features

*   **Modern, Responsive Design:** A clean UI/UX that looks great on all devices, from mobile phones to desktop monitors.
*   **Light & Dark Modes:** A theme toggle that respects user's system preferences on first visit.
*   **Dynamic Content:** Experience, Projects, and Certificates are all loaded from structured data files, making updates trivial.
*   **Interactive Elements:** Smooth page transitions and subtle on-scroll animations powered by Framer Motion.
*   **Performance Optimized:** Built with Next.js for static site generation (SSG), optimized fonts with `next/font`, and best practices for a high Lighthouse score.
*   **SEO & Accessibility:** Semantic HTML, ARIA attributes, and dynamic meta tags for optimal search engine visibility and screen reader support.

---

## 🛠️ Tech Stack & Architecture

This project was built with a modern, professional tech stack chosen for performance, developer experience, and scalability.

*   **Framework:** [Next.js](https://nextjs.org/) (React Framework)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Animations:** [Framer Motion](https://www.framer.com/motion/)
*   **Deployment:** [Vercel](https://vercel.com/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Contact Form:** [Formspree](https://formspree.io/)
*   **Linting & Formatting:** ESLint & Prettier

### Architectural Decisions

*   **Component-Based Architecture:** The UI is broken down into small, reusable components located in `src/components/`. This follows best practices for maintainability.
*   **Data-Driven Content:** All personal data (experience, projects, etc.) is decoupled from the UI and stored in `src/content/`. This allows for easy updates without touching any React code.
*   **Static Site Generation (SSG):** The entire site is pre-built into static HTML, CSS, and JavaScript files during the build process (`next export`). This results in a website that is incredibly fast, secure, and can be hosted on any static hosting provider.

---

## 🔧 Getting Started

To run this project locally, follow these steps:

### Prerequisites

*   Node.js (v18.x or later recommended)
*   npm or yarn

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/[TODO: your-github-username]/[TODO: your-repo-name].git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd [TODO: your-repo-name]
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Available Scripts

*   `npm run dev`: Starts the local development server.
*   `npm run build`: Builds the application for production (`next build && next export`).
*   `npm run lint`: Runs the ESLint linter to check for code quality issues.
*   `npm run analyze`: Builds the app and runs the bundle analyzer to inspect package sizes.

---

## 🌟 What I Learned

Building this portfolio was a valuable exercise in applying modern web development principles to a real-world project. Key takeaways include:

*   **The Power of a Design System:** Implementing a consistent spacing and color palette in `tailwind.config.js` streamlined the entire styling process.
*   **Accessibility is Non-Negotiable:** Integrating semantic HTML and ARIA labels from the start results in a much more robust and inclusive application.
*   **Performance as a Feature:** Optimizing fonts, images, and animations with Next.js's built-in tools (`next/font`, `next/image`) significantly improves the end-user experience.
*   **The Importance of Decoupling:** Separating data from the UI made the site incredibly easy to manage and update.

---

## 📞 Contact

For questions or any comments, contact [hlatwayne@gmail.com] or open an issue on GitHub.


Thank you for visiting!
