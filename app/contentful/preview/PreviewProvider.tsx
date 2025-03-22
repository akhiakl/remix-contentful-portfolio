import React from 'react';
import { ContentfulLivePreviewProvider } from '@contentful/live-preview/react';

interface PreviewProviderProps {
  children: React.ReactNode;
  locale: string;
  draftMode?: boolean;
}

const PreviewProvider: React.FC<PreviewProviderProps> = ({ children, locale, draftMode }) => (
  <ContentfulLivePreviewProvider locale={locale} enableInspectorMode={draftMode} enableLiveUpdates={draftMode}>
    {children}
  </ContentfulLivePreviewProvider>
);

export default PreviewProvider;