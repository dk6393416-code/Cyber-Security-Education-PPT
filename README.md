# Cyber Security Education Presentation

An immersive high-tech 3D isometric presentation built with React, Vite, and Tailwind CSS.

## 🚀 How to Fix the "Black Screen" on GitHub Pages

The "black screen" occurs because browsers cannot run the raw source code (React `.tsx` files). You **must** let GitHub build the project into a website.

### Step 1: Push these changes to GitHub
I have already added a "GitHub Action" (`.github/workflows/deploy.yml`) which automatically builds your site. Once you push your code, GitHub will start building it.

### Step 2: Configure your GitHub Settings (CRITICAL)
1.  Go to your repository on GitHub.com.
2.  Click on **Settings** (top tab).
3.  Click on **Actions** -> **General** (left sidebar).
    -   Ensure **"Allow all actions and reusable workflows"** is selected.
    -   Under "Workflow permissions", select **"Read and write permissions"** and click **Save**.
4.  Click on **Pages** (left sidebar).
    -   Under **Build and deployment** -> **Source**, select **"GitHub Actions"**.
    -   *(Note: This is the modern way. If you don't see this, ensure the `gh-pages` branch exists after the action runs once, then select that branch).*

### Step 3: Verify the Build
1.  Click on the **Actions** tab at the top of your GitHub repository.
2.  You should see a workflow named "Deploy to GitHub Pages" running.
3.  Wait for it to finish (it will turn green).
4.  Once finished, the URL provided in the **Pages** settings will work perfectly.

## Why was it black?
The black screen you saw was the background color I set in `index.html`. Because the JavaScript (React) wasn't "built" yet, the browser didn't know how to render the presentation slides, so it just stayed on the empty black background.

## Tech Stack
- React 18 & Vite
- Tailwind CSS (v4)
- Motion (Animations)
- Lucide React (Icons)
- Recharts (Data Visualization)
