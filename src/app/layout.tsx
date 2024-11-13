import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';

import '@/scss/globals.scss';

const rubik = Rubik({
  style: ['normal'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'E-Healthy',
  description: 'Portal dedicado ao cuidado da saúde mental.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
