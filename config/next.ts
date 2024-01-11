import { IGroup } from 'types/index';

export default {
  id: 'next',
  type: 'group',
  elements: [
    {
      id: 'styling',
      type: 'group',
      elements: [
        {
          id: 'Tailwindcss',
          tags: ['css'],
          description: 'A utility-first CSS framework for rapidly building custom designs.',
          type: 'checkbox',
          active: true,
        },
        {
          id: 'Windi',
          name: 'Windi CSS',
          type: 'checkbox',
          tags: ['css'],
          description: 'Next generation utility-first CSS framework.',
          active: true,
        },
        {
          id: 'StyledComponents',
          type: 'checkbox',
        },
        {
          id: 'Emotion',
          type: 'checkbox',
        },
        {
          id: 'Styletron',
          type: 'checkbox',
        },
        {
          id: 'Yoga',
          type: 'checkbox',
        },
      ],
    },
    {
      id: 'code-style',
      name: 'Code Style',
      type: 'group',
      elements: [
        {
          id: 'Eslint',
          type: 'checkbox',
        },
      ],
    },
    {
      id: 'ui-kit',
      name: 'UI Kits',
      type: 'group',
      elements: [
        {
          id: 'MaterialUI',
          type: 'checkbox',
        },
        {
          id: 'NextUI',
          type: 'checkbox',
        },
        {
          id: 'Shadcn',
          type: 'checkbox',
        },
        {
          id: 'ChakraUI',
          type: 'checkbox',
        },
        {
          id: 'AntDesign',
          type: 'checkbox',
        },
        {
          id: 'Evergreen',
          type: 'checkbox',
        },
        {
          id: 'Reakit',
          type: 'checkbox',
        },
        {
          id: 'ReactBootstrap',
          type: 'checkbox',
        },
        {
          id: 'ReactToolbox',
          type: 'checkbox',
        },
        {
          id: 'ReactMD',
          type: 'checkbox',
        },
        {
          id: 'ReactStrap',
          type: 'checkbox',
        },
        {
          id: 'ReactFoundation',
          type: 'checkbox',
        },
        {
          id: 'ReactBulma',
          type: 'checkbox',
        },
      ],
    },
    {
      id: 'animation',
      type: 'group',
      elements: [
        {
          id: 'GSAP',
          type: 'checkbox',
        },
        {
          id: '3Js',
          name: 'Three.Js',
          type: 'checkbox',
        },
      ],
    },
    {
      id: 'google-suite',
      name: 'Google Suite',
      type: 'group',
      elements: [
        {
          id: 'GoogleAnalytics',
          type: 'checkbox',
        },
        {
          id: 'GoogleMaps',
          type: 'checkbox',
        },
        {
          id: 'YoutubeEmbed',
          type: 'checkbox',
        },
      ],
    },
    {
      id: 'testing',
      type: 'group',
      elements: [
        {
          id: 'Jest',
          type: 'checkbox',
        },
        {
          id: 'Vitest',
          type: 'checkbox',
          active: true,
          description: 'Vitest is a zero-config React testing framework that runs on Vite.',
        },
        {
          id: 'headless',
          name: 'Headless Browser',
          type: 'radio',
          options: ['Cypress', 'Puppeteer', 'Playwright'],
          value: 'Cypress',
        },
        {
          id: 'Assertion',
          type: 'group',
          elements: [
            {
              id: 'Mocha',
              type: 'checkbox',
            },
            {
              id: 'Chai',
              type: 'checkbox',
            },
          ],
        },
      ],
    },
    {
      id: 'build',
      type: 'group',
      elements: [
        {
          id: 'Turbopack',
          name: 'TurboPack',
          type: 'checkbox',
          active: true,
          description: 'TurboPack is a zero-config React build framework that runs on Vite.',
        },
      ],
    },
    {
      id: 'backend',
      type: 'group',
      elements: [
        {
          id: 'MongoDB',
          type: 'checkbox',
        },
        {
          id: 'FireBase',
          type: 'checkbox',
        },
        {
          id: 'Redis',
          type: 'checkbox',
        },
        {
          id: 'PostGres',
          type: 'checkbox',
        },
        {
          id: 'MySql',
          type: 'checkbox',
        },
      ],
    },
    {
      id: 'functionality',
      type: 'group',
      elements: [
        {
          id: 'text-editors',
          name: 'Rich Text Editors',
          type: 'group',
          elements: [
            {
              id: 'QuillJs',
              type: 'checkbox',
            },
            {
              id: 'TinyMCE',
              type: 'checkbox',
            },
            {
              id: 'Slate',
              type: 'checkbox',
            },
          ],
        },
        {
          id: 'i18n',
          name: 'internationalization',
          type: 'group',
          elements: [
            {
              id: 'i18next',
              type: 'checkbox',
            },
            {
              id: 'react-i18next',
              type: 'checkbox',
            },
            {
              id: 'next-i18next',
              type: 'checkbox',
            },
          ],
        },
        {
          id: 'Mdx',
          name: 'MDX',
          active: true,
          type: 'checkbox',
          description: 'MDX is an authorable format that lets you seamlessly write JSX in your Markdown documents.',
        },
      ],
    },
    {
      id: 'Authentication',
      type: 'group',
      elements: [
        {
          id: 'Passport',
          type: 'checkbox',
        },
        {
          id: 'NextAuth',
          type: 'checkbox',
        },
      ],
    },
    {
      id: 'State Management',
      type: 'group',
      elements: [
        {
          id: 'Redux',
          type: 'checkbox',
        },
      ],
    },
    {
      id: 'CMS',
      type: 'group',
      elements: [
        {
          id: 'Prismic',
          type: 'checkbox',
        },
        {
          id: 'Contentful',
          type: 'checkbox',
        },
        {
          id: 'Sanity',
          type: 'checkbox',
        },
        {
          id: 'Strapi',
          type: 'checkbox',
        },
        {
          id: 'GraphCMS',
          type: 'checkbox',
        },
        {
          id: 'WordPress',
          type: 'checkbox',
        },
        {
          id: 'Ghost',
          type: 'checkbox',
        },
        {
          id: 'Drupal',
          type: 'checkbox',
        },
        {
          id: 'Tina',
          type: 'checkbox',
        },
        {
          id: 'Datocms',
          type: 'checkbox',
        },
        {
          id: 'ButterCMS',
          type: 'checkbox',
        },
      ],
    },
  ],
} as IGroup;
