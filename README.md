# Photography Portfolio

A static, full-bleed grid photo portfolio. No build tools, no dependencies — just HTML, CSS and JS.

## Files

```
index.html    the site
style.css     all styling
script.js     grid, collection filtering, lightbox, about panel
photos.js     your content — edit this to add photos and text
admin.html    a browser tool for editing photos.js without touching code
admin.js      logic for admin.html
images/       your photo files go here
```

## Adding photos

**Option A — by hand**
1. Copy your image files into `images/`.
2. Open `photos.js` and add an entry to the `PHOTOS` array for each one:
   ```js
   {
     file: "images/your-photo.jpg",
     name: "Photo Title",
     text: "Optional short caption.",
     collections: ["Selected Photographs", "Landscapes"]
   }
   ```
3. New photos should go at the **top** of the array — the site shows them in the order they appear.

**Option B — with the admin tool**
1. Open `admin.html` in your browser (just double-click the file).
2. Click "Load existing data" and select your current `photos.js`.
3. Edit, add, or remove photos using the form.
4. Click "Download photos.js" and replace the old file in your project folder.
5. You still need to manually copy any new image files into `images/` — browsers can't do that step for you.

## Collections

- A photo can belong to more than one collection — just list them comma-separated (admin tool) or as an array (by hand).
- The homepage shows whichever collection is set as `DEFAULT_COLLECTION` at the top of `photos.js` (currently **"Selected Photographs"**).
- Every unique collection name you use across your photos automatically becomes a tab in the top navigation, plus an "All Photographs" tab.

## Site text

Edit the `SITE` object at the top of `photos.js` (or use the admin tool) to change the site title, tagline, about text, and contact details.

## Publishing with GitHub Pages (free hosting)

1. Create a new repository on [github.com](https://github.com), e.g. `my-portfolio`.
2. Upload all these files (keeping the `images/` folder structure) to the repository — either drag-and-drop on github.com, or via git:
   ```
   git init
   git add .
   git commit -m "First version of site"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/my-portfolio.git
   git push -u origin main
   ```
3. In the repository, go to **Settings → Pages**.
4. Under "Build and deployment", set **Source** to "Deploy from a branch", branch `main`, folder `/ (root)`.
5. Save. Your site will be live within a minute or two at:
   ```
   https://YOUR-USERNAME.github.io/my-portfolio/
   ```
6. Any time you push changes (new photos, edited `photos.js`), the live site updates automatically.

## Notes on image size

For 100+ photos, keep individual image files reasonably small (around 1500–2000px on the long edge, exported at good-but-not-maximum JPEG quality) so the grid loads quickly. Full-resolution originals aren't needed for web display.
