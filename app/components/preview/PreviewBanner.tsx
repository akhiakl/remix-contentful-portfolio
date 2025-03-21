import React from 'react';

export function PreviewBanner() {
  return (
    <div className="fixed top-5 right-1/2 transform translate-x-1/2 p-2 rounded-md border p3 z-50">
      <p>You&apos;re in <strong>draft mode</strong></p>
      <form action="/api/disable-draft" method="post">
        <button type="submit" className="underline cursor-pointer">Exit draft Mode</button>
      </form>
    </div>
  );
}