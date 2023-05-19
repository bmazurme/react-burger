import React from 'react';

import MenuItem from '../menu-item';

import { TypeMainLink } from '../../mocks/main-links';

export default function Menu({ links, extraClass }: { links: TypeMainLink[], extraClass: string }) {
  return (
    <ul className={extraClass}>
      {links.map((x: TypeMainLink) => (<MenuItem key={x.id} {...x} />))}
    </ul>
  );
}
