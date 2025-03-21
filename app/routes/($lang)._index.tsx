import React from 'react';
import type { Route } from "./+types/($lang).home";
import { Hero } from '~/hero/hero';
import FeaturedProjects from '~/projects/featured-projects';
import Skills from '~/skills/skills';
import { client } from '~/models/contentful/server';
import FeaturedProjectsSkeleton from '~/components/FeaturedProjectsSkeleton';
import { PreviewBanner } from '~/components/preview/PreviewBanner';
import { draftMode } from '~/utils/draft-mode.server';
import { useLoaderData } from 'react-router';

// eslint-disable-next-line no-empty-pattern
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Akhil K" },
    { name: "description", content: "A Senior Front End Developer specializing in React and Next.js" },
  ];
}

export async function loader({ request }: Route.LoaderArgs) {
  const nonCriticalData = client.getProjects()
  const preview = (await draftMode(request)).isEnabled;
  return {
    nonCriticalData,
    preview
  };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { preview } = useLoaderData<typeof loader>();

  return <>
    {preview && <PreviewBanner />}
    <Hero />
    <Skills />
    <React.Suspense fallback={<FeaturedProjectsSkeleton />}>
      <FeaturedProjects dataLoader={loaderData.nonCriticalData} />
    </React.Suspense>
  </>;
}
