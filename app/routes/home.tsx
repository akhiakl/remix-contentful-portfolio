import React from 'react';
import type { Route } from "./+types/home";
import { Hero } from '~/hero/hero';
import FeaturedProjects from '~/projects/featured-projects';
import Skills from '~/skills/skills';

// eslint-disable-next-line no-empty-pattern
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Akhil K" },
    { name: "description", content: "A Senior Front End Developer specializing in React and Next.js" },
  ];
}

export default function Home() {
  return <>
    <Hero />
    <FeaturedProjects />
    <Skills />
  </>;
}
