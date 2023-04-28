import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { MenuIcon, CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Menu from '../menu';

import withExtraClass from '../../hocs/with-extra-class';
import { linkPropTypes } from '../../utils/types';

import style from './menu-button.module.css';

const UserMenu = withExtraClass(style.mobile)(Menu);

export default function MenuButton({ links, onClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  return (
    <>
      <button type="button" className={style.button} onClick={toggleMenu}>
        {!isOpen ? <MenuIcon type="primary"/> : <CloseIcon type="primary" />}
      </button>
      {isOpen &&
        <div className={style.menu}>
          <h2 className={`${style.title} text text_type_main-medium`}>Меню</h2>
          <UserMenu links={links} onClick={onClick} />
        </div>}
    </>
  );
}

MenuButton.protoType = {
  links: PropTypes.arrayOf(linkPropTypes),
  onClick: PropTypes.func.isRequired,
}
