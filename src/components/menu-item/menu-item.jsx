import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';

import { ArrowUpIcon, ArrowDownIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import MenuItemLinks from '../menu-item-links';
import Icon from '../icon';

import style from './menu-item.module.css';

export default function MenuItem({
  id, label, extraClass, icon, links, url,
}) {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(null);
  const handleClick = (currId) => setIsOpen(currId !== isOpen ? currId : null);
  const active = useMemo(() => links?.some((x) => x.url === pathname) ? true : pathname === url, [pathname]);

  return (
    <li className={`${style.item} ${extraClass && extraClass}`} onClick={() => handleClick(id)}>
      <div className={style.container}>
        <NavLink to={url} className={style.link}>
          <Icon active={active} component={icon} />
          <span
            className={classNames('text text_type_main-default pl-2',
            { 'text_color_inactive': !active },
            )}
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

MenuItem.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  extraClass: PropTypes.string,
  icon: PropTypes.any.isRequired,
  links: PropTypes.arrayOf(PropTypes.object),
  url: PropTypes.string,
};
