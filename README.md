
# dinhhieudata-portfolio

Static portfolio template (HTML/CSS/JS) modeled after simple data-analyst portfolio layouts.
- Name shown: **dinhhieudata**
- Email: **dinhhieudata@gmail.com**
- 3 demo projects included in `data/projects.json`

## How to run locally
1. Unzip the repo and open `index.html` with a browser. If images or fetch to `data/projects.json` do not load due to browser CORS/security, use a simple local server:
   - Python 3: `python -m http.server 8000`
   - Then open http://localhost:8000 in your browser.

## Deploy to GitHub Pages
1. Create a new GitHub repository named `dinhhieudata.github.io` (or any name if you prefer; for user site use that exact name).
2. Push the files to the repository (main branch).
3. In repository Settings > Pages, set source to `main` branch `/ (root)` and save.
4. Wait a couple minutes; your site will be available at `https://yourusername.github.io` (or `https://dinhhieudata.github.io` if you used that repo name).

## How to edit content
- Edit the HTML files in the root for page content.
- Update `data/projects.json` to add or change projects (images stored in assets/images).
- Replace avatar `assets/images/avatar.svg` with your photo if desired.

