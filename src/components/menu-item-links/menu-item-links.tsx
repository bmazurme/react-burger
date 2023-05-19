import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import { TypeSubLink } from '../../mocks/main-links';

import style from './menu-item-links.module.css';

export default function MenuItemLinks({ links }: { links: TypeSubLink[], onClick?: () => void }) {
  return (
    <ul className={style.sublinks}>
      {links.map(({
        id, label, url, handler,
      }: { id: string, label: string, url: string, handler?: () => void }) => (
        <NavLink
          key={id}
          to={url}
          className={({ isActive }) => classNames(style.sublink, 'text text_type_main-default', { [style.inactive]: !isActive })}
          onClick={handler}
          end
        >
          {label}
        </NavLink>
      ))}
    </ul>
  );
}
