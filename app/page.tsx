import Form from 'components/form';
import { Metadata } from 'next';

export default async function Home() {
  return (
    <main className="container mx-auto pt-8">
      <h1 className="text-5xl text-center">MetaStrap</h1>
      <Form />
    </main>
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
