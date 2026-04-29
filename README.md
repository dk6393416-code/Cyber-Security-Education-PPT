# Cyber Security Education Presentation

An immersive high-tech 3D isometric presentation built with React, Vite, and Tailwind CSS.

## 🚀 Deployment to GitHub Pages

This repository is configured to deploy automatically to GitHub Pages using GitHub Actions.

### Steps to Fix the Black Screen / Deploy correctly:

1. **Enable GitHub Actions**:
   - Go to your repository on GitHub.
   - Click on **Settings** -> **Actions** -> **General**.
   - Ensure "Allow all actions and reusable workflows" is selected.
   - Under "Workflow permissions", ensure "Read and write permissions" is selected.

2. **Configure GitHub Pages**:
   - Go to **Settings** -> **Pages**.
   - Under **Build and deployment** -> **Source**, select **GitHub Actions**.

3. **Trigger the Deployment**:
   - Push a change to the `main` branch (e.g., adding a trivial change to this README).
   - Go to the **Actions** tab to see your deployment progress.

### Why was I seeing a black screen?
Vite applications need to be "built" (compiled) before they can be hosted on a static site provider like GitHub Pages. Browsers cannot run `.tsx` files directly. The GitHub Action I've added (`.github/workflows/deploy.yml`) handles this building process for you automatically on every push.

## Tech Stack
- React 18
- Vite
- Tailwind CSS
- Motion (Animations)
- Lucide React (Icons)
- Recharts (Data Visualization)
