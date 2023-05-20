import React from 'react';

import ElementBun from '../element-bun';
import ElementMain from '../element-main';

export default function ConstructorBlock(props: TypeElementBun | TypeElementMain) {
  const { position } = props as TypeElementBun;

  return (position
    ? <ElementBun position={position} />
    : <ElementMain {...props as TypeElementMain} />);
}
