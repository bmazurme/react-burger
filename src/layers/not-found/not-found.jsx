import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import { Urls } from '../../utils';

import style from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={style.container}>
      <h2 className={classNames(style.title, 'text text_type_digits-large')}>
        404
        <span className={classNames(style.span, 'text text_type_digits-medium pb-8')}>
          Not found page
        </span>
      </h2>
      <NavLink className="text text_type_main-default text_color_inactive pb-2" to={Urls.BASE}>
        Go to main
      </NavLink>
    </div>
  );
}
