import React from 'react';

import mainCss from '@Styles/mainCss';

import { HeadComponent } from './Head';

type DefaultTemplateProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: DefaultTemplateProps) {
  mainCss();
  return (
    <>
      <HeadComponent />
      <main>{children}</main>
    </>
  );
}
