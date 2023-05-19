/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useMemo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import { ArrowUpIcon, ArrowDownIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import MenuItemLinks from '../menu-item-links';
import Icon from '../icon';
import { TypeMainLink, TypeSubLink } from '../../mocks/main-links';

import style from './menu-item.module.css';

export default function MenuItem({
  id, label, extraClass, icon, links, url,
}: TypeMainLink) {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState<string | null>(null);
  const handleClick = (currId: string) => setIsOpen(currId !== isOpen ? currId : null);
  // eslint-disable-next-line max-len
  const active = useMemo(() => (links?.some((x: TypeSubLink) => x.url === pathname) ? true : pathname === url), [pathname]);

  return (
    <li className={`${style.item} ${extraClass && extraClass}`} onClick={() => handleClick(id)}>
      <div className={style.container}>
        <NavLink to={url!} className={style.link}>
          <Icon active={active} component={icon} />
          <span
            className={classNames('text text_type_main-default pl-2', { text_color_inactive: !active })}
          >
            {label}
          </span>
        </NavLink>
        {links?.length && (isOpen === id ? <ArrowUpIcon type="primary" /> : <ArrowDownIcon type="primary" />)}
      </div>
      {links && (isOpen === id) && <MenuItemLinks links={links} />}
    </li>
  );
}
