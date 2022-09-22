import React from 'react';
import type { FC } from 'react';
import GlobalHeader from '../GlobalHeader';
import GlobalFooter from '../GlobalFooter';
import type { LayoutProps } from './types';

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <GlobalHeader />
      <main>{children}</main>
      <GlobalFooter />
    </>
  );
};

export default Layout;
