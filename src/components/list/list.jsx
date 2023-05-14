/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import style from './list.module.css';

export default function List({ list, extraClass, title }) {
  return (
    <>
      {title && <h3 className="text text_type_main-medium mt-10 mb-6">{title}</h3>}
      <ul className={style.list}>
        {list.map((x, i) => (
          <li
            key={i}
            className={
              classNames(
                'text text_type_digits-default',
                style.item,
                extraClass,
              )
            }
          >
            {x}
          </li>
        ))}
      </ul>
    </>
  );
}

List.propTypes = {
  list: PropTypes.any.isRequired,
  extraClass: PropTypes.string,
  title: PropTypes.string,
};
