# tomasrybak.github.io

Source of my personal website at [tomasrybak.github.io](https://tomasrybak.github.io/).

It's a single static page in plain HTML, CSS and vanilla JavaScript, with no framework and no build step. Light and dark mode follow the system setting. GitHub Pages deploys it from `main` on every push.

## Structure

```
index.html          the page
css/style.css       styles; theme colors are CSS variables at the top
js/projects.js      project list (data only)
js/main.js          renders project cards
assets/             favicon, social preview image, photo
```

## Adding a project

Append an object to the `PROJECTS` array in `js/projects.js`. Cards appear in array order.

```js
{
  title: "My project",
  tag: "Team project",            // optional
  description: "One or two sentences about what it does.",
  stack: ["C#", "Unity"],
  links: [{ label: "Code", href: "https://github.com/tomasrybak/my-project" }],
},
```

## Running locally

Open `index.html` in a browser, or serve the folder:

```sh
python3 -m http.server 8000
```
