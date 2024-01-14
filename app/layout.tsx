import type { ReactNode } from 'react';
import {
  SiGithub, SiTwitter, SiLinkedin,
  SiTwitterHex,
  SiLinkedinHex,
} from '@icons-pack/react-simple-icons';
import '../styles/globals.css';
import '../styles/icomoon.css';
import { FabButton } from 'components/atoms/button/clientButton';
import Link from 'next/link';

const socialLinks = [
  {
    icon: <SiGithub color="white" />,
    url: 'https://github.com/metastrap/metastrap.github.io',
  },
  {
    icon: <SiTwitter color={SiTwitterHex} />,
    url: 'https://twitter.com/itzsrikanth',
  },
  {
    icon: <SiLinkedin color={SiLinkedinHex} />,
    url: 'https://www.linkedin.com/in/itzsrikanth',
  },
];

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header className="container mx-auto py-4 flex justify-between">
          <Link href="/">
            <h1 className="text-2xl ml-4 text-center">MetaStrap</h1>
          </Link>
          <div className="social-links flex">
            {
              socialLinks.map(({ icon, url }) => (
                <Link
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-2"
                  aria-label={url}
                >
                  {icon}
                </Link>
              ))
            }
          </div>
        </header>

        <main className="container mx-auto pt-8">
          {children}
        </main>

        <FabButton type="button" className="fixed right-4 bottom-4">
          <i className="icon-clear rotate-45 duration-150 transition-[transform]" />
        </FabButton>
      </body>
    </html>
  );
}
