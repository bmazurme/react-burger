import React from 'react';
import type { PropsWithChildren } from 'react';

import AppHeader from '../app-header';

type TypeProps = PropsWithChildren<{ header?: boolean; }>;

export default function Content({ header, children }: TypeProps) {
  return (
    <>
      {header && <AppHeader />}
      {children}
    </>
  );
}
