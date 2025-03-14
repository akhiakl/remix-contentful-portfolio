import { lazy } from 'react';

const techIcons = {
  typescript: {
    icon: lazy(() => import('./TypeScriptIcon')),
    title: 'TypeScript'
  },
  react: {
    icon: lazy(() => import('./ReactJsIcon')),
    title: 'React JS'
  },
  next: {
    icon: lazy(() => import('./NextJsIcon')),
    title: 'Next JS'
  },
  angular: {
    icon: lazy(() => import('./AngularIcon')),
    title: 'Angular'
  },
  html: {
    icon: lazy(() => import('./HtmlIcon')),
    title: 'HTML'
  },
  css: {
    icon: lazy(() => import('./CSSIcon')),
    title: 'CSS'
  },
  tailwind: {
    icon: lazy(() => import('./TailwindIcon')),
    title: 'Tailwind'
  },
  node: {
    icon: lazy(() => import('./NodeJsIcon')),
    title: 'Node JS'
  },
  express: {
    icon: lazy(() => import('./ExpressJsIcon')),
    title: 'Express JS'
  },
  nest: {
    icon: lazy(() => import('./NestJsIcon')),
    title: 'Nest JS'
  },
  mongodb: {
    icon: lazy(() => import('./MongoDBIcon')),
    title: 'MongoDB'
  },
  postgres: {
    icon: lazy(() => import('./PostgresIcon')),
    title: 'Postgres'
  },
  jest: {
    icon: lazy(() => import('./JestIcon')),
    title: 'Jest'
  },
  alpine: {
    icon: lazy(() => import('./AlpineJsIcon')),
    title: 'Alpine JS'
  },
  remix: {
    icon: lazy(() => import('./RemixIcon')),
    title: 'Remix / React Router'
  },
  alokai: {
    icon: lazy(() => import('./AlokaiIcon')),
    title: 'Alokai / Vue Storefront'
  },
  jira: {
    icon: lazy(() => import('./JiraIcon')),
    title: 'Jira'
  },
  bootstrap: {
    icon: lazy(() => import('./JiraIcon')),
    title: 'Bootstrap'
  },
}

export default techIcons;