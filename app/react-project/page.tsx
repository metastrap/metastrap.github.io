import UnderConstruction from 'components/organisms/underConstruction';

import type { Metadata } from 'next';

export default UnderConstruction;

export const metadata: Metadata = {
  title: 'MetaStrap: React Project Bootstrapper site',
  description: 'MetaStrap generates React projects with all features and libraries integrated. Just what you need to hit the ground running!',
  authors: {
    url: 'https://www.linkedin.com/in/itzsrikanth',
    name: 'Srikanth Sharma',
  },
  keywords: [
    'react',
    'javascript',
    'typescript',
    'redux',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://metastarp.github.io/react-project/',
    siteName: 'MetaStrap',
  },
};
