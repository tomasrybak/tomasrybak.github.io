// Builds project cards from PROJECTS (js/projects.js).
// Uses textContent instead of innerHTML so project data is never parsed as HTML.
function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

function renderProject(project) {
  const item = el("li", "project");

  const head = el("div", "project__head");
  head.append(el("h3", null, project.title));
  if (project.tag) head.append(el("span", "project__tag", project.tag));
  item.append(head);

  item.append(el("p", "project__desc", project.description));

  if (project.stack?.length) {
    const stack = el("ul", "project__stack");
    stack.setAttribute("aria-label", "Technologies");
    for (const tech of project.stack) stack.append(el("li", null, tech));
    item.append(stack);
  }

  if (project.links?.length) {
    const links = el("div", "project__links");
    for (const { label, href } of project.links) {
      const a = el("a", null, label);
      a.href = href;
      a.setAttribute("aria-label", `${label}: ${project.title}`);
      links.append(a);
    }
    item.append(links);
  }

  return item;
}

const list = document.getElementById("project-list");
if (list && typeof PROJECTS !== "undefined") {
  list.append(...PROJECTS.map(renderProject));
}

document.getElementById("year").textContent = new Date().getFullYear();
