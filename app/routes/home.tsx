import React from 'react';
import type { Route } from "./+types/home";
import { Hero } from '~/hero/hero';
import FeaturedProjects from '~/projects/featured-projects';
import Skills from '~/skills/skills';
import { client } from '~/models/contentful/server';
import FeaturedProjectsSkeleton from '~/components/FeaturedProjectsSkeleton';

// eslint-disable-next-line no-empty-pattern
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Akhil K" },
    { name: "description", content: "A Senior Front End Developer specializing in React and Next.js" },
  ];
}

export function loader() {
  const nonCriticalData = client.getProjects()
  return {
    nonCriticalData
  };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return <>
    <Hero />
    <Skills />
    <React.Suspense fallback={<FeaturedProjectsSkeleton />}>
      <FeaturedProjects dataLoader={loaderData.nonCriticalData} />
    </React.Suspense>
  </>;
}
