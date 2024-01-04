import type { ReactNode } from 'react';
// eslint-disable-next-line import/no-unresolved
import '../styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
