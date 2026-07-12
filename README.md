# Infinyty Tech Website

Welcome to the official repository for the Infinyty Tech website. This is a lightweight, high-performance static website built using HTML, CSS, and vanilla JavaScript. 

It is currently deployed and live at: **[https://infinyty.netlify.app/](https://infinyty.netlify.app/)**

## 🚀 Getting Started

To get a local copy of this project up and running, follow these simple steps.

### Prerequisites

You don't need any complex build tools like Node.js or Webpack to run this site. You only need:
- A modern web browser (Chrome, Safari, Edge, etc.)
- A text editor (like [VS Code](https://code.visualstudio.com/))
- *(Optional but recommended)* A local server extension like **Live Server** for VS Code.

### Installation & Running Locally

1. **Clone the repository:**
   ```sh
   git clone https://github.com/anuragpras/infinyty-tech-website.git
   ```
2. **Open the project folder:**
   Open the downloaded `infinyty-tech-website` folder in your preferred text editor.
3. **Run the website:**
   - **Method 1 (Simplest):** Just double-click the `index.html` file in your file explorer to open it directly in your browser.
   - **Method 2 (Recommended):** If you are using VS Code, install the "Live Server" extension. Right-click on `index.html` and select **"Open with Live Server"**. This will start a local development server (usually at `http://127.0.0.1:5500`) and automatically reload the page whenever you save changes.

## 🛠️ Editing the Website

The website is structured to be easily maintainable without complex build steps:

- **`.html` files:** Edit these files (e.g., `index.html`, `about.html`, `services.html`) to change the page text, structure, or content.
- **`style.css`:** Contains all the design rules. It utilizes custom CSS variables (found at the top in the `:root` block) for easy global theme changes. It also supports dark mode styling under the `.dark-mode` class.
- **`main.js`:** Contains lightweight interactivity like the mobile menu toggle, scroll progress bar, active navigation highlighting, and theme switching logic.
- **`assets/` folder:** Place any new images, client logos, or SVGs in this folder to keep the root directory organized. 

## 🌐 Deployment

This project is fully integrated with **Netlify** for continuous deployment.
Whenever you commit and push changes to the `main` branch on GitHub, Netlify will automatically detect the changes and deploy the updates to the live URL within seconds!
