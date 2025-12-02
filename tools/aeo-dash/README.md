# AEO Dashboard (React Version)

This is the React version of the AEO Dashboard, converted from the original HTML/CSS/JS implementation.

## Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

## Building for Deployment

To deploy to GitHub Pages (or any static hosting):

1. Run the build command:
   ```bash
   npm run build
   ```

2. This will create a `dist` folder containing:
   - `index.html`
   - `assets/` (bundled JS and CSS)

3. **Deployment Steps**:
   - The build is configured with base path `/POC-Tools/tools/aeo-dash/`.
   - Commit the `dist` folder contents to your repository if you want to serve it directly, OR
   - Configure your GitHub Action to build and deploy this folder.

## Project Structure

- `src/components`: Reusable UI and feature components
- `src/context`: Global state management (Theme, Client)
- `src/data`: Mock data
- `src/hooks`: Custom React hooks

## Features

- **Dark Mode**: Fully supported with system preference detection
- **Multi-Client Support**: Switch between different client data
- **Interactive Charts**: Powered by Chart.js
- **Responsive Design**: Mobile-friendly layout
