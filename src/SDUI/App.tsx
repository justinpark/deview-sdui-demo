import React from 'react';
import { registry } from './registry';
import AppFramework from './AppFramework';
import PageScreen from './PageScreen';

export default function App() {
  // const { metadata } = data;
  const metadata = {
    sections: [
      {
        id: 'title01',
        type: 'TitleSection',
      },
      {
        id: 'title02',
        type: 'TitleSection',
      },
      {
        id: 'banner01',
        type: 'BannerSection',
      }
    ],
    layouts: [
      {
        id: 'MAIN',
        subsectionIds: ['title01', 'banner01', 'title02'],
      }
    ],
  };

  return (
    <AppFramework registry={registry} metadata={metadata}>
      <PageScreen />
    </AppFramework>
  )
}
