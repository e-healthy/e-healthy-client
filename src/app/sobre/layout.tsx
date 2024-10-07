import '@/scss/globals.scss';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

import './layout.module.scss';
import { FC, PropsWithChildren } from 'react';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navigation />
      <main className="p-main">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
