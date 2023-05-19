import React, { ElementType } from 'react';

type TypeIcon = {
  component: ElementType;
  active: boolean;
};

export default function Icon({ component: Component, active }: TypeIcon) {
  return <Component type={active ? 'primary' : 'secondary'} />;
}
