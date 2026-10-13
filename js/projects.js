// Project list rendered by main.js, in display order.
// To add a project, append an object:
//   title        required
//   tag          optional short note shown next to the title
//   description  required, one or two sentences
//   stack        list of technologies
//   links        list of { label, href }
const PROJECTS = [
  {
    title: "WFC-ACO-Hybrid",
    tag: "Bachelor's thesis",
    description:
      "Procedural level generation in Unity that combines Wave Function Collapse with ant colony optimization. Builds for Windows and Linux.",
    stack: ["C#", "Unity"],
    links: [{ label: "Code", href: "https://github.com/tomasrybak/WFC-ACO-Hybrid" }],
  },
  {
    title: "ARIA",
    tag: "AI-assisted",
    description:
      "A desktop dashboard that lives on the wallpaper, below your windows. It shows system stats, my university timetable, GitHub notifications, mail and a real terminal. I designed it and specified every widget; the code was written with Claude Code, and it's how I'm learning Rust.",
    stack: ["Rust", "Tauri", "JavaScript"],
    links: [{ label: "Code", href: "https://github.com/tomasrybak/ARIA" }],
  },
  {
    title: "lisp-interpreter-c",
    description:
      "A Lisp interpreter in ANSI C with an interactive REPL and a batch mode. It has its own tokenizer, a recursive-descent parser and an evaluator.",
    stack: ["C89"],
    links: [{ label: "Code", href: "https://github.com/tomasrybak/lisp-interpreter-c" }],
  },
  {
    title: "UltimateTrackHorse",
    tag: "Team project",
    description:
      "A Unity game I'm making with three other students. Tracks are put together from modular road pieces: straights, turns, serpentines and Bézier curves.",
    stack: ["C#", "Unity"],
    links: [{ label: "Code", href: "https://github.com/KrystofZak/UltimateTrackHorse" }],
  },
];
