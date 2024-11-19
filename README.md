# ABI Web Frontend

This is the frontend for the **ABI (Amanot Business Invest)** platform — "Stay Ahead By Investment" — an online business website built using **React**.

## Front-End Development Setup

To start developing the frontend, follow the React installation steps for your operating system:

- **React Installation on Windows:**
  [Watch the tutorial](https://youtu.be/yOAZDymGWVw?si=L5nDHh1hgiIUE_Nb)

- **React Installation on Mac:**
  [Watch the tutorial](https://youtu.be/UzNCh7x1wKw?si=ClcyfYoGfYmuALAE)

## Development Environment

We will be using **Visual Studio Code** as our code editor. Follow the instructions below to install it on your operating system:

- **Visual Studio Code on Windows:**
  [Watch the tutorial](https://youtu.be/CPmQwlycfGI?si=_2vqavNmYJbiDxb6)

- **Visual Studio Code on Mac:**
  [Watch the tutorial](https://youtu.be/w0xBQHKjoGo?si=ugxIb5AgoBwMInMN)

## Tools and Technologies
- **React** (Front-end framework)
- **Vite** (Build tool)
- **Tailwind CSS** (CSS framework)
- **Visual Studio Code** (Development environment)

## Project Setup (React + Vite + Tailwind CSS)

To set up the project, follow the steps below:

1. Initialize the project with Vite:
    ```bash
    npm create vite@latest ./
    ```
    Choose the following options:
    - **React**
    - **JavaScript**

2. Install the necessary dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm run dev
    ```

### Tailwind CSS Setup

1. Install Tailwind CSS along with PostCSS and Autoprefixer:
    ```bash
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
    ```

2. Update the `tailwind.config.js` file:
    ```js
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    ```

3. Add Tailwind's base, components, and utilities styles in the `index.css` file:
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

4. Run the development server again:
    ```bash
    npm run dev
    ```
### React Router Dom

1. npm install react-router-dom
2. npm install react-redux

### Additional Configurations

- **Extension `ES7+React/Redux/React-Native snippets`**

- **Handling `unknownatrule` Warnings:**  
  If you encounter `unknownatrule` warnings, you can configure your editor(settings) to ignore them.
  
- **Tailwind CSS Intellisense Extension:**  
  Install the **Tailwind CSS Intellisense** extension in Visual Studio Code.

## Summary

This repository contains the frontend code for the ABI online business platform. Follow the provided guides to set up your local environment. 

## Thank You Devs



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
