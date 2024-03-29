import Form from 'components/organisms/form';
import Frameworks from 'components/organisms/frameworks';
import MessagePreview from 'components/organisms/messagePreview';
import type { Metadata } from 'next';
import Link from 'next/link';

export default async function Home() {
  return (
    <>
      <Frameworks />
      <MessagePreview>
        <span>
          MetaStrap is a dev tool to bootstrap FrontEnd frameworks using various features,
          configurations and other dependencies, similar to
        </span>
        &nbsp;
        <Link href="https://start.spring.io" target="_blank">Spring Initializr</Link>
        <span>. Select required options, download the zip and start coding!</span>
      </MessagePreview>
      <Form />
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
    'react',
    'astro js',
    'nuxt js',
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
