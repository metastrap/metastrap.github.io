import type { ReactNode } from 'react';
import { SiGithub, SiTwitter, SiLinkedin } from '@icons-pack/react-simple-icons';
import '../styles/globals.css';
import '../styles/icomoon.css';
import { FabButton } from 'components/atoms/button/clientButton';
import Link from 'next/link';

const socialLinks = [
  {
    icon: <SiGithub />,
    url: 'https://github.com/metastarp/metastarp.github.io',
  },
  {
    icon: <SiTwitter />,
    url: 'https://twitter.com/itzsrikanth',
  },
  {
    icon: <SiLinkedin />,
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
          <h1 className="text-2xl ml-4 text-center">MetaStrap</h1>
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
        {children}
        <FabButton className="fixed right-4 bottom-4">
          <i className="icon-clear rotate-45 duration-150 transition-[transform]" />
        </FabButton>
      </body>
    </html>
  );
}
