import { projectTech } from "@/data/tech";
import type { TechItem } from "@/data/tech";

export interface Project {
  name: string;
  imgSrc: string;
  description: string;
  techStack: TechItem[];
  liveLink: string;
  githubLink: string;
  about: string;
  features: string[];
}

export const projects: Project[] = [
  {
    name: "SuperTodo",
    imgSrc: "/projects/supertodo.png",
    description:
      "A full-featured todo app with priorities, due dates, subtasks, and date-grouped views. Animated with Framer Motion and styled with shadcn/ui for a polished experience.",
    about:
      "A personal productivity app built to go beyond a basic todo list. It supports subtasks, priority levels, due dates, and groups tasks by date for a cleaner overview. Built with React, shadcn/ui, and Framer Motion, with a heavy focus on animations and a polished user experience.",
    features: [
      "Create, edit, and delete tasks with subtask support and completion tracking",
      "Priority levels (High, Medium, Low) with visual indicators",
      "Due date picker with date-grouped task views",
      "Filter by All, Pending, and Completed — sort by status, priority, or date",
      "Smooth Framer Motion animations on task add, complete, and delete",
      "Dark and light theme toggle with persistent preference",
      "Data persisted via localStorage — survives page refresh",
    ],
    techStack: [
      projectTech.react,
      projectTech.javascript,
      projectTech.tailwindcss,
      projectTech.vite,
      projectTech.motion,
      projectTech.shadcnui,
    ],
    liveLink: "https://supertodo-v1.netlify.app/",
    githubLink: "https://github.com/CharanMunur/supertodo",
  },
  {
    name: "Markdown Editor",
    imgSrc: "/projects/markdowneditor.png",
    description:
      "A Monaco-powered markdown editor with live GitHub-style preview, PDF export via Print.js, theme toggle, and optional sync scroll to keep both panes aligned.",
    about:
      "A dual-pane workbench built for writing and previewing markdown in real time. It leverages Monaco Editor for syntax highlighting and code completion, with a live GitHub-styled preview on the right. Shipped with useful features like instant PDF export and synchronized scrolling.",
    features: [
      "Monaco Editor with syntax highlighting and code completion",
      "Live GitHub-styled markdown preview in the right pane",
      "Sync scroll — preview stays aligned with the editor as you type",
      "PDF export via Print.js with a single click",
      "Copy entire content to clipboard",
      "Dark and light theme toggle",
      "Content persisted via localStorage across sessions",
      "Bundled default markdown file for instant demo",
    ],
    techStack: [
      projectTech.react,
      projectTech.javascript,
      projectTech.tailwindcss,
      projectTech.vite,
      projectTech.monaco,
    ],
    liveLink: "https://markdown-editor-v1.netlify.app/",
    githubLink: "https://github.com/CharanMunur/markdown-editor",
  },
];
