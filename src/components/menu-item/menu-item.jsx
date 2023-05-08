import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { ArrowUpIcon, ArrowDownIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import MenuItemLinks from '../menu-item-links';

import style from './menu-item.module.css';

function Icon({ component: Component, active }) {
  return <Component type={active ? 'primary' : 'secondary'} />;
}

export default function MenuItem({
  id, label, extraClass, active, icon, links, onClick,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (currId, e) => {
    e.preventDefault();
    onClick(currId);
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (!isOpen) {
      setIsOpen(true);
    }
  }, [active]);

  return (
    <li className={`${style.item} ${extraClass && extraClass}`}>
      <div className={style.container}>
        <a href="/" className={style.link} onClick={(e) => handleClick(id, e)}>
          <Icon active={active} component={icon} />
          <span className={`text text_type_main-default pl-2 ${!active && 'text_color_inactive'}`}>
            {label}
          </span>
        </a>
        {links && active && (isOpen ? <ArrowUpIcon type="primary" /> : <ArrowDownIcon type="primary" />)}
      </div>
      {links && isOpen && active && <MenuItemLinks links={links} />}
    </li>
  );
}

MenuItem.propTypes = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  active: PropTypes.bool,
  extraClass: PropTypes.string,
  icon: PropTypes.any.isRequired,
  onClick: PropTypes.func.isRequired,
};
