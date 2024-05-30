import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/kiwi-docs/',
    component: ComponentCreator('/kiwi-docs/', 'bf3'),
    exact: true
  },
  {
    path: '/kiwi-docs/markdown-page',
    component: ComponentCreator('/kiwi-docs/markdown-page', 'a57'),
    exact: true
  },
  {
    path: '/kiwi-docs/docs',
    component: ComponentCreator('/kiwi-docs/docs', '726'),
    routes: [
      {
        path: '/kiwi-docs/docs',
        component: ComponentCreator('/kiwi-docs/docs', '86c'),
        routes: [
          {
            path: '/kiwi-docs/docs',
            component: ComponentCreator('/kiwi-docs/docs', '63d'),
            routes: [
              {
                path: '/kiwi-docs/docs/category/community',
                component: ComponentCreator('/kiwi-docs/docs/category/community', 'c08'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/kiwi-docs/docs/category/how-kiwi-works',
                component: ComponentCreator('/kiwi-docs/docs/category/how-kiwi-works', 'f6f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/kiwi-docs/docs/category/important-links',
                component: ComponentCreator('/kiwi-docs/docs/category/important-links', 'af8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/kiwi-docs/docs/community/get-involved',
                component: ComponentCreator('/kiwi-docs/docs/community/get-involved', '336'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/kiwi-docs/docs/community/retro-funding',
                component: ComponentCreator('/kiwi-docs/docs/community/retro-funding', 'a51'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/kiwi-docs/docs/important-links/links',
                component: ComponentCreator('/kiwi-docs/docs/important-links/links', 'fa5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/kiwi-docs/docs/intro',
                component: ComponentCreator('/kiwi-docs/docs/intro', 'be5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/kiwi-docs/docs/kiwi-how-works/delegation',
                component: ComponentCreator('/kiwi-docs/docs/kiwi-how-works/delegation', 'c85'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/kiwi-docs/docs/kiwi-how-works/karma',
                component: ComponentCreator('/kiwi-docs/docs/kiwi-how-works/karma', '810'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/kiwi-docs/docs/kiwi-how-works/kiwipass',
                component: ComponentCreator('/kiwi-docs/docs/kiwi-how-works/kiwipass', '114'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/kiwi-docs/docs/kiwi-how-works/passkeys',
                component: ComponentCreator('/kiwi-docs/docs/kiwi-how-works/passkeys', '795'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/kiwi-docs/docs/kiwi-how-works/protocol',
                component: ComponentCreator('/kiwi-docs/docs/kiwi-how-works/protocol', '375'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
