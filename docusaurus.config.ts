import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Documentation | Dapplets Platform",
  tagline: "Welcome to the Dapplets",
  url: "https://docs.dapplets.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "/svg/logo.svg",
  organizationName: "Dapplets",
  projectName: "dapplet-mutable-web",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },

          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: ["docusaurus-plugin-sass", "docusaurus-plugin-fontloader"],
  themeConfig: {
    image: "img/sidebar-header-logo-svg",
    // navbar: {
    //   items: [
    //     {
    //       to: "https://dapplets.org/",
    //       label: "Home",
    //       position: "right",
    //       className: "home-hover-menu",
    //     },
    //   ],
    // },
    footer: {
      links: [
        {
          label: "What is Dapplets Project?",
          href: "https://dapplets.org/#what-is",
        },
        {
          label: "Innovation",
          href: "https://dapplets.org/#innovation",
        },
        {
          label: "How to use it?",
          href: "https://dapplets.org/#to-use",
        },
        {
          label: "Role model",
          href: "https://dapplets.org/#economic",
        },
      ],
    },
    colorMode: {
      disableSwitch: true,
    },
    prism: {
      theme: prismThemes.ultramin,
      darkTheme: prismThemes.duotoneDark,
    },
    algolia: {
      // The application ID provided by Algolia
      appId: "RV9UMBHX9R",

      // Public API key: it is safe to commit it
      apiKey: "85ce5081b83416428f2a4e64d01d45b8",

      indexName: "dapplets",

      // Optional: see doc section below
      contextualSearch: false,
      searchParameters: {
        facetFilters: ["language:en", ["filter1", "filter2"], "filter3"],
      },

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      // externalUrlRegex: 'external\\.com|domain\\.com',

      // Optional: Algolia search parameters
      // searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: "search",

      //... other Algolia params
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
