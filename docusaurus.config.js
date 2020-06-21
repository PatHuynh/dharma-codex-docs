module.exports = {
  title: "Dharma Codex",
  tagline: "Documentation for the Dharma Codex",
  url: "https://PatrickHuynh.github.io/",
  baseUrl: "/dharma-codex-docs/",
  favicon: "img/favicon.ico",
  organizationName: "PatrickHuynh", // Usually your GitHub org/user name.
  projectName: "dharma-codex-docs", // Usually your repo name.
  themeConfig: {
    defaultDarkMode: true,
    algolia: {
      apiKey: "e54d735be7781489b9c7a70f2be6612d",
      indexName: "prod_dharma_codex_docs",
      appId: "LTZ8Z20565", // Optional, if you run the DocSearch crawler on your own
      algoliaOptions: {}, // Optional, if provided by Algolia
    },
    navbar: {
      title: "Dharma Codex",
      logo: {
        alt: "",
        src: "img/logo.svg",
      },
      links: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/facebook/docusaurus",
          label: "GitHub",
          position: "right",
        },
        { search: true },
      ],
    },
    footer: {
      style: "dark",
      links: [],
      copyright: `${new Date().getFullYear()} Dharma Codex`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: "doc1",
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
