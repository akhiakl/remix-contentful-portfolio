import { data, redirect } from 'react-router';
import { draftMode } from '~/utils/draft-mode.server';
import type { Route } from './+types/draft';

export const loader = async ({ request }: Route.LoaderArgs) => {
  const requestUrl = new URL(request?.url);
  const secret = requestUrl?.searchParams?.get('secret');
  const slug = requestUrl?.searchParams?.get('slug') ?? "";
  const locale = requestUrl?.searchParams?.get('locale');

  // This secret should only be known to this API route and Contentful
  if (secret !== process.env.CONTENTFUL_PREVIEW_SECRET) {
    return data({ message: 'Invalid token' }, { status: 401 });
  }

  const draft = await draftMode(request)
  const headers = await draft.enable();

  return redirect(`/${locale}/${slug}`, {
    headers
  });
};