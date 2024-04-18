// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Kiwi News",
  tagline:
    "Decentralized hacker news focused on crypto tech, products and culture",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://kiwistand.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/kiwi-docs/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "attestate", // Usually your GitHub org/user name.
  projectName: "Kiwistand", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/attestate/kiwistand/",
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl: "https://github.com/attestate/kiwistand/",
        // },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/kiwi_docs.png",
      navbar: {
        title: "Kiwi Docs",
        logo: {
          alt: "Kiwi Logo",
          src: "img/kiwi_logo_docs.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Docs",
          },
          {
            to: "https://paragraph.xyz/@kiwi-updates",
            label: "Product Updates",
            position: "left",
          },
          {
            href: "https://github.com/attestate/kiwistand",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Docs",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Kiwi",
                href: "https://news.kiwistand.com/community",
              },
              {
                label: "Farcaster",
                href: "https://warpcast.com/~/channel/kiwi-news",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/KiwiNewsHQ",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Product Updates",
                to: "https://paragraph.xyz/@kiwi-updates",
              },
              {
                label: "GitHub",
                href: "https://github.com/attestate/kiwistand",
              },
            ],
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
