import React from 'react';
import type { Route } from "./+types/($lang)._index";
import { Hero } from '~/components/hero/Hero';
import FeaturedProjects from '~/components/projects/FeaturedProjects';
import Skills from '~/components/skills/Skills';
import { client } from '~/contentful/server';
import FeaturedProjectsSkeleton from '~/components/shared/FeaturedProjectsSkeleton';
import { PreviewBanner } from '~/contentful/preview/PreviewBanner';
import { draftMode } from '~/utils/draft-mode.server';
import { useLoaderData } from 'react-router';
import AboutMe from '~/components/aboutme/AboutMe';
import ContactMe from '~/components/contactme/AboutMe';
import { sendEmail } from '~/utils/mailer.server';

// eslint-disable-next-line no-empty-pattern
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Akhil K" },
    { name: "description", content: "A Senior Front End Developer specializing in React and Next.js" },
  ];
}

export async function loader({ request }: Route.LoaderArgs) {
  const preview = (await draftMode(request)).isEnabled;
  const nonCriticalData = client.getProjects(preview)
  return {
    nonCriticalData,
    preview
  };
}

export async function action({ request }: Route.ActionArgs) {
  const body = await request.formData();
  const honeypot = body.get("honeypot");

  if (honeypot) {
    return { error: "Bot detected!" };
  }
  const fromName = String(body.get('name'));
  const fromEmail = String(body.get('email'));
  const subject = String(body.get('subject'));
  const message = String(body.get('message'));
  const response = await sendEmail({ fromEmail, fromName, subject, message });
  return { message: response };
}


export default function Home({ loaderData }: Route.ComponentProps) {
  const { preview } = useLoaderData<typeof loader>();

  return <>
    {preview && <PreviewBanner />}
    <Hero />
    <AboutMe />
    <Skills />
    <React.Suspense fallback={<FeaturedProjectsSkeleton />}>
      <FeaturedProjects dataLoader={loaderData.nonCriticalData} />
    </React.Suspense>
    <ContactMe />
  </>;
}
