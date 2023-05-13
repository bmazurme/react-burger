/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useMemo } from 'react';
import { useLocation } from 'react-router';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { MenuIcon, CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import MenuItemLinks from '../menu-item-links';
import Menu from '../menu';
import Icon from '../icon';

import withExtraClass from '../../hocs/with-extra-class';
import { linkPropTypes } from '../../utils';

import style from './menu-button.module.css';

const UserMenu = withExtraClass(style.mobile)(Menu);

export default function MenuButton({ links }) {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const toggleMenu = () => setIsOpen(!isOpen);
  const active = useMemo(() => links[2].links.some(({ url }) => url === pathname), [pathname]);

  return (
    <>
      <button type="button" onClick={toggleMenu} className={style.link}>
        <div className={style.desktop}>
          <Icon active={active} component={links[2].icon} />
          <span className={classNames('text text_type_main-default pl-2', { text_color_inactive: !active })}>
            {links[2].label}
          </span>
        </div>
        {isOpen && (
        <div className={style.user_links}>
          <MenuItemLinks links={links[2].links} onClick={toggleMenu} />
        </div>
        )}
      </button>
      <div className={style.mobile}>
        <button type="button" className={style.button} onClick={toggleMenu}>
          {!isOpen ? <MenuIcon type="primary" /> : <CloseIcon type="primary" />}
        </button>
        {isOpen
          && (
            <div className={style.menu} onClick={(e) => e.preventDefault()}>
              <h2 className={`${style.title} text text_type_main-medium`}>Меню</h2>
              <UserMenu links={[...links].reverse()} onClick={toggleMenu} />
            </div>
          )}
      </div>
    </>
  );
}

MenuButton.propTypes = {
  links: PropTypes.arrayOf(linkPropTypes),
};
