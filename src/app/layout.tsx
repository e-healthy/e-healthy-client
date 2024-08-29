import type { Metadata } from 'next';
import { Roboto, Rubik } from 'next/font/google';

import './globals.scss';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  style: ['italic', 'normal'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

const rubik = Rubik({
  weight: ['700'],
  style: ['normal'],
  subsets: ['latin'],
  fallback: ['Roboto', 'Arial', 'sans-serif'],
  variable: '--font-rubik',
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
  const classes = `${roboto.variable} ${rubik.variable}`;
  return (
    <html lang="pt-br">
      <body className={classes}>{children}</body>
    </html>
  );
}
