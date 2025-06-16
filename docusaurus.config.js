// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'BurnySc2/Python-Sc2 Documentation',
  tagline: 'The Gemini 2.5 Pro generated guide to BurnySc2/Python-Sc2 and RL (Alpha v0.1). Generated content may contain errors.',
  favicon: 'img/favicon.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'google-site-verification',
        content: 'Ssfb9WLX16jSFbtw7JFWgG15TJY8nHTLIGt57oR9_uk', // <-- PASTE YOUR CODE HERE
      },
    },
  ],
  // Set the production url of your site here
  url: 'https://MaxsimGol.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/learn-python-sc2/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'MaxsimGol', // Usually your GitHub org/user name.
  projectName: 'learn-python-sc2', // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.

        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Home page',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {
            href: 'https://github.com/MaxsimGol/learn-python-sc2',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation Resources',
            items: [
              {
                label: 'BurnySc2/python-sc2',
                href: 'https://github.com/BurnySc2/python-sc2',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'SC2 AI Arena Discord',
                href: 'https://discord.com/invite/zXHU4wM',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Sentdex YouTube guide',
                href: 'https://www.youtube.com/watch?v=HlLK5BA0wT0&list=PLQVvvaa0QuDcBby2qVDsDv41GghEQfr5E&ab_channel=sentdex',
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
