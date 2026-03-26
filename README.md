# su9-it

Freelance IT services landing page built with HTML, CSS, and JavaScript.

## Overview

This project is a static marketing website for **su9-it**, highlighting service offerings, pricing, and a contact form.

The site includes:

- Responsive navigation and hero section
- Services, about, and pricing sections
- Contact form with client-side submit feedback
- Custom styling layered on top of Bootstrap 5

## Tech Stack

- HTML5
- CSS3
- JavaScript (vanilla)
- Bootstrap 5.3.3 (CDN)

## Project Structure

- `index.html` - Main page markup
- `styles.css` - Custom styles and theme variables
- `script.js` - Contact form interaction logic

## Run Locally

Option 1: Open directly

1. Open `index.html` in your browser.

Option 2: Serve with a local HTTP server (recommended)

1. From the project root, run:

```bash
python -m http.server 5500
```

2. Visit:

```text
http://localhost:5500
```

## Deploy On GitHub Pages (This Repo)

Repository:

- https://github.com/SVeena25/su9-it

Expected live site URL:

- https://sveena25.github.io/su9-it/

Use these exact steps:

1. Push your latest changes to the `main` branch:

```bash
git checkout main
git pull origin main
git add .
git commit -m "Update site"
git push origin main
```

2. In GitHub, open **Settings** for this repository.
3. Go to **Pages** in the left sidebar.
4. Under **Build and deployment**:
	- **Source**: `Deploy from a branch`
	- **Branch**: `main`
	- **Folder**: `/ (root)`
5. Click **Save**.
6. Wait 1-3 minutes for the first deploy.
7. Refresh the Pages section and open the published link.

If your site does not appear immediately, wait a few minutes and hard-refresh the page.

### Update Workflow

After Pages is enabled, every push to `main` automatically redeploys the site.

Quick deploy command sequence:

```bash
git add .
git commit -m "Your update message"
git push origin main
```

### Troubleshooting

- 404 on first load: wait for the initial Pages build to finish.
- Old content showing: browser cache issue; hard refresh.
- Broken styles/scripts: confirm paths are relative (`styles.css`, `script.js`) and files are in repo root.

## Form Behavior

The contact form currently simulates a successful submission:

- Prevents default form submit
- Shows a success message
- Resets the form fields

No backend integration is configured yet.

## Next Improvements

- Connect contact form to an email/API backend
- Add form validation messages for each field
- Add SEO/social meta tags and favicon assets
