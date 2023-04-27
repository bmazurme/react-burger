import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { ArrowUpIcon, ArrowDownIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import style from './menu-item.module.css';

export default function MenuItem({
  id, label, extraClass, active, icon, links, onClick,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (id, e) => {
    e.preventDefault();

    onClick(id);
    setIsOpen(!isOpen);
  };

  const Icon = ({ component: Component, active }) => (<Component type={active ? 'primary' : 'secondary'} />);

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

      {links && isOpen && active &&
        <ul className={style.sublinks}>
          {links.map(({ label }, i) => (<li className={`${style.sublink} text text_type_main-default`} key={i}>{label}</li>))}
        </ul>}
    </li>
  );
}

MenuItem.protoType = {
  id: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  active: PropTypes.bool,
  extraClass: PropTypes.string,
  icon: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
}
