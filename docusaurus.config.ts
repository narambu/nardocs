import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Nar Docs',
  tagline: 'Documentation for Nar',
  favicon: 'img/favicon.png',

  future: {
    v4: true,
  },

  url: 'https://nardocs.narambu.com',
  baseUrl: '/',

  organizationName: 'narambu',
  projectName: 'nardocs',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/narambu/nardocs/tree/main/',
          remarkPlugins: [],
          rehypePlugins: [],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Nar Docs',
      logo: {
        alt: 'Nar Logo',
        src: 'img/nar-logo.png',
      },
      items: [
        {
          href: 'https://nar.narambu.com',
          label: 'Nar',
          position: 'right',
        },
        {
          href: 'https://github.com/narambu/nardocs/issues',
          label: 'Report an Issue',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      copyright: `Nar Docs`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'docker'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
