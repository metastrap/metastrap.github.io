import MessagePreview from 'components/organisms/messagePreview';
import FormMain from 'components/organisms/form';

import type { Metadata } from 'next/types';
import Link from 'next/link';

export default function NextJsProject() {
  return (
    <>
      <MessagePreview>
        <span>
          MetaStrap helps to bootstrap Next.Js project with various libraries
          in the ecosystem. Select required options, download the zip and start coding!
          <br />
          Please consider&nbsp;
        </span>
        <Link href="https://github.com/metastrap" target="_blank">contributing</Link>
        <span> to the project.</span>
      </MessagePreview>
      <FormMain />
    </>
  );
}

export const metadata: Metadata = {
  title: 'MetaStrap: Next.js Bootstrapper site',
  description: 'MetaStrap generates Next.Js projects with all features and libraries integrated. Just what you need to hit the ground running!',
  authors: {
    url: 'https://www.linkedin.com/in/itzsrikanth',
    name: 'Srikanth Sharma',
  },
  keywords: [
    'next.js',
    'typescript',
    'tailwindcss react',
    'bootstrap 5',
    'react-hook-form',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://metastarp.github.io/',
    siteName: 'MetaStrap',
  },
  other: {
    'google-site-verification': 'H04IA54IYMintIPECDfJx_PRqGr67Z_fowTsInJtkZY',
  },
};
