import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: "category",
      label: "Getting Started",
      collapsed: false,
      items: ["introduction"],
    },
    {
      type: "category",
      collapsed: false,
      label: "Introduction to Mutable Web",
      items: ["introduction-to-mutable-web/introduction-to-mutable-web"],
    },
  ],
};

export default sidebars;
