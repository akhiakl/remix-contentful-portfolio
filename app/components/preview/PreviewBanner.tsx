import React from 'react';

export function PreviewBanner() {
  return (
    <>
      <p>You&apos;re in <strong>draft mode</strong> (DRAFT content from Contentful served)</p>
      <form action="/api/disable-draft" method="post">
        <button type="submit">Exit draft Mode</button>
      </form>
    </>
  );
}