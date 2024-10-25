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
      collapsed: true,
      label: "Mutable Web is a semantic based",
      items: ["introduction-to-mutable-web/mutable-web-is-a-semantic-based"],
    },
    {
      type: "category",
      collapsed: true,
      label: "Structure of the Mutable Web",
      items: [
        "structure-of-the-mutable-web/semantic-context",
        "structure-of-the-mutable-web/insertion-points-widgets-controllers-applications",
        "structure-of-the-mutable-web/mutations-mutators-users",
      ],
    },
    {
      type: "category",
      collapsed: true,
      label: "Universal LifeCycle in Mutable Web",
      items: [
        "universal-life-cycle-in-mutable-web/universal-life-cycle-in-mutable-web",
      ],
    },
  ],
};

export default sidebars;