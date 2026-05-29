# Penta Freight - Frontend UI Clone

This project is a high-fidelity, fully responsive frontend UI recreation of the Penta Freight website. It was built to demonstrate advanced layout techniques, modern React practices, and pixel-perfect styling using Tailwind CSS.

## 🚀 Live Demo
https://pentakulh-assignment.vercel.app/

## 🛠️ Tech Stack
* **Frontend Framework:** React.js (via Vite for optimized builds and fast HMR)
* **Styling:** Tailwind CSS (Utility-first CSS framework for rapid UI development)
* **Routing:** React Router v6 (Client-side routing)
* **Icons:** Inline SVGs for zero-dependency, lightweight vector graphics

## ✨ Key Features
* **Pixel-Perfect Responsive Design:** Fluid layouts that adapt seamlessly from mobile screens to ultra-wide desktop monitors using Tailwind's `md:` and `lg:` breakpoints.
* **Immersive Video Backgrounds:** Full-screen hero sections utilizing `100dvh` and `object-cover` for native-feeling background videos that don't letterbox.
* **Complex Grid Systems:** Asymmetric and zig-zag content layouts, mimicking high-end corporate web design.
* **Interactive UI States:** * Custom built FAQ Accordions using React `useState`.
  * Dynamic Tabbed Navigation for the "Series Guide" product specs.
  * Mobile-responsive hamburger navigation menu.
* **Data-Driven Architecture:** UI components are populated by isolated data structures (like `INDUSTRIES_DATA`), separating UI rendering logic from content.

## 📂 Project Structure

\`\`\`text
src/
├── assets/             # Local images and video files (e.g., homevideo.mp4)
├── components/         # Reusable UI components
│   └── Navbar.jsx      # Fixed, responsive top navigation with mobile menu
├── pages/              # Main route views
│   ├── Home.jsx        # Landing page with full-bleed video hero
│   ├── Industries.jsx  # Multi-industry grid layout with FAQ
│   └── Pentakuhl.jsx   # Product showcase with interactive tabs
├── constants.js        # Centralized data arrays for clean component code
├── App.jsx             # Main router setup
└── main.jsx            # React entry point
\`\`\`

## 💻 Getting Started

To run this project locally on your machine, follow these steps:

**1. Clone the repository:**
https://github.com/vivekbilla004/Pentakulh-assignment-

**2. Navigate into the project directory:**
cd penta-freight-clone


**3. Install dependencies:**
npm install

**4. Start the development server:**
npm run dev
`http://localhost:5173` 

## 🧠 Technical Highlights & Problem Solving
* **Z-Index & Fixed Navbar Management:** Implemented strict z-index stacking (`z-50` for nav) and calculated padding offsets (`pt-32` / `pt-[200px]`) to ensure hero content never overlaps behind the fixed header.
* **Mobile Address Bar Fix:** Utilized `100dvh` (Dynamic Viewport Height) instead of standard `100vh` to prevent mobile browser UI from cutting off bottom-anchored content.
* **Video Optimization:** Used `playsInline`, `autoPlay`, and `muted` attributes to ensure background videos play automatically without user interaction, even on restrictive mobile browsers like iOS Safari.

---
Developed by Vivek Billa 