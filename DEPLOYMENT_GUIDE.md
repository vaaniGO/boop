# GitHub Pages Deployment Fix Guide

## Problem
Your app shows a blank page when deployed to GitHub Pages because of routing configuration issues.

## Solution

### Current Configuration ✅
Your files are now correctly configured:

1. **vite.config.ts** - Has `base: "/boop/"` for production
2. **App.tsx** - Has `basename="/boop/"` in BrowserRouter
3. **404.html** - Handles client-side routing
4. **index.html** - Has redirect script for SPA routing

### Deployment Options

#### Option 1: Using GitHub Actions (Recommended)

1. **Enable GitHub Pages in your repository:**
   - Go to Settings → Pages
   - Source: Select "GitHub Actions"

2. **Push the workflow file:**
   The `.github/workflows/deploy.yml` file has been created. Just commit and push:
   ```bash
   git add .github/workflows/deploy.yml
   git commit -m "Add GitHub Actions workflow for deployment"
   git push
   ```

3. **Automatic deployment:**
   Every push to `main` branch will now automatically build and deploy.

#### Option 2: Using gh-pages package (Manual)

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy to gh-pages branch:**
   ```bash
   npm run deploy
   ```

3. **Configure GitHub Pages:**
   - Go to Settings → Pages
   - Source: Deploy from branch
   - Branch: Select `gh-pages` and `/ (root)`

### Verification Steps

After deployment, your site should be available at:
```
https://[your-username].github.io/boop/
```

**Important:** Make sure you're accessing the correct URL with `/boop/` at the end!

### Common Issues & Fixes

#### Issue 1: Still seeing blank page
- **Check URL:** Ensure you're visiting `https://[username].github.io/boop/` (with `/boop/`)
- **Clear cache:** Hard refresh with Ctrl+Shift+R (or Cmd+Shift+R on Mac)
- **Check deployment:** Verify the build completed in Actions tab

#### Issue 2: 404 on page refresh
This should be fixed by the 404.html file. If still happening:
- Ensure `public/404.html` is being copied to the dist folder
- Check that GitHub Pages is configured to use the correct branch

#### Issue 3: Assets not loading
- Verify `base: "/boop/"` is in vite.config.ts for production mode
- Check browser console for 404 errors on assets
- Ensure the build output includes the correct asset paths

### Testing Locally

To test the production build locally:

```bash
npm run build
npm run preview
```

Then visit `http://localhost:4173/boop/`

### Repository Name Different?

If your repository is NOT named "boop", you need to update:

1. **vite.config.ts** line 18:
   ```typescript
   base: mode === "production" ? "/your-repo-name/" : "/",
   ```

2. **App.tsx** line 19:
   ```typescript
   <BrowserRouter basename="/your-repo-name/">
   ```

3. **public/404.html** line 11:
   ```html
   <meta http-equiv="refresh" content="0;URL='/your-repo-name/'">
   ```

### Quick Fix Checklist

- [ ] Repository name matches "boop" (or update all configs)
- [ ] Built the project with `npm run build`
- [ ] Deployed to GitHub Pages
- [ ] Accessing the correct URL with `/boop/` path
- [ ] Cleared browser cache

### Still Not Working?

1. Check the browser console for errors
2. Verify the GitHub Actions workflow succeeded (if using Actions)
3. Ensure GitHub Pages is enabled in repository settings
4. Check that the repository is public (or you have GitHub Pro for private repos)
5. Wait 1-2 minutes after deployment for GitHub's CDN to update
