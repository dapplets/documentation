import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    "intro",
    {
      type: "category",
      label: "Tutorial",
      items: ["tutorial-basics/congratulations"],
    },
  ],
};

export default sidebars;
