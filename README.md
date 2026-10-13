# tomasrybak.github.io

My personal website: who I am, what I'm working on and how to reach me. Live at [tomasrybak.github.io](https://tomasrybak.github.io/).

It's one static page written in plain HTML, CSS and a little vanilla JavaScript. There's no framework, no build step and nothing to install. Light and dark mode follow the system setting.

## Structure

```
index.html          the page
css/style.css       all styles; colors are CSS variables at the top
js/projects.js      project list (data only)
js/main.js          renders project cards, sets the footer year
assets/             favicon, social preview image, portrait photo
```

## Editing content

**Add a project:** append an object to the `PROJECTS` array in `js/projects.js`:

```js
{
  title: "My project",
  tag: "Team project",            // optional
  description: "One or two sentences about what it does.",
  stack: ["C#", "Unity"],
  links: [{ label: "Code", href: "https://github.com/tomasrybak/my-project" }],
},
```

Cards appear in the same order as the array.

**Replace the photo:** overwrite `assets/photo.jpg` with a square image, at least 600×600 px. Keep the file name.

**Turn on LinkedIn:** in `index.html`, put your profile URL into the LinkedIn link and remove the `hidden` attribute from its `<li>`.

## Running locally

Open `index.html` in a browser. That's it. If you prefer a local server (closer to how GitHub Pages serves it):

```sh
python3 -m http.server 8000
```

Then go to http://localhost:8000.

## Deploying to GitHub Pages

1. Create a public repository named exactly **`tomasrybak.github.io`**. A repository with this name becomes the user site, served at `https://tomasrybak.github.io/` with no path after the domain.
2. Push the contents of this folder to the `main` branch.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to **Deploy from a branch**, then pick branch **`main`** and folder **`/ (root)`**. Save.
5. Wait a minute or two. The Actions tab shows the "pages build and deployment" run; once it's green, the site is live.

Every later push to `main` redeploys the site automatically.

## Custom domain

Say you bought `tomasrybak.cz`.

1. **Verify the domain on your account first** (GitHub → your avatar → Settings → Pages → Add a domain). GitHub gives you a TXT record to add at your registrar. This stops anyone else from pointing their GitHub Pages site at your domain.
2. **Add DNS records** at your registrar:

   For the apex domain (`tomasrybak.cz`), four `A` records:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```
   Optionally the IPv6 equivalents as `AAAA` records:
   ```
   2606:50c0:8000::153
   2606:50c0:8001::153
   2606:50c0:8002::153
   2606:50c0:8003::153
   ```
   For `www`, a `CNAME` record pointing to `tomasrybak.github.io`.

3. **Set the domain in the repository:** Settings → Pages → Custom domain → enter `tomasrybak.cz` → Save. GitHub commits a `CNAME` file into the repo; leave it there.
4. Once the DNS check passes, tick **Enforce HTTPS**. The certificate can take up to an hour to be issued.
5. Update the absolute URLs in `index.html` (`canonical`, `og:url`, `og:image`) to the new domain so link previews and search engines use it.

DNS changes can take a few hours to spread. `dig tomasrybak.cz +short` shows what your machine currently sees.

