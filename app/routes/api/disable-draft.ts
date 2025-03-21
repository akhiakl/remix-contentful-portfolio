import { redirect } from 'react-router';
import type { ActionFunction, LoaderFunction } from 'react-router';
import { draftMode } from '~/utils/draft-mode.server';


export const loader: LoaderFunction = async () => {
  return redirect('/');
};

export const action: ActionFunction = async ({ request }) => {
  const draft = await draftMode(request)
  const headers = await draft.disable();

  return redirect(`/`, {
    headers
  });
};