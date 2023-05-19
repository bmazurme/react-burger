/* eslint-disable implicit-arrow-linebreak */
import React, { ElementType } from 'react';
import { TypeMainLink } from '../mocks/main-links';

const withExtraClass = (extraClass: string) => (Component: ElementType) =>
  function WithExtraClass({ links, onClick }: { links: TypeMainLink[], onClick?: () => void}) {
    return <Component links={links} extraClass={extraClass} onClick={onClick} />;
  };

export default withExtraClass;
