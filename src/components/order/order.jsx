/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import classNames from 'classnames';
// import PropTypes from 'prop-types';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import cards from '../../mocks/data';

import style from './order.module.css';

const RANGE = 5;
const mockData = {
  number: '034535',
  time: ' Сегодня, 16:20',
  name: 'Death Star Starship Main бургер',
  price: 480,
  icons: cards.slice(0, RANGE),
  count: cards.length - RANGE,
  cards,
};

export default function Order({ onClick }) {
  return (
    <li className={style.order} onClick={() => onClick(mockData)}>
      <div className={style.header}>
        <span className="text text_type_digits-default">{`#${mockData.number}`}</span>
        <span className="text text_type_main-default text_color_inactive">{mockData.time}</span>
      </div>
      <h2 className="text text_type_main-medium mt-6 mb-6">{mockData.name}</h2>
      <div className={style.footer}>
        <ul className={style.icons}>
          {mockData.icons.map((x, i) => (
            <li
              key={x._id}
              className={i < RANGE - 1 ? style.item : style.item_last}
              style={{ left: `${i * 50}px`, zIndex: 100 - i }}
            >
              <img className={style.icon} src={x.image} alt={x.name} />
              {(mockData.count > 0 && i === RANGE - 1)
               && (
               <span className={classNames(style.counter, 'text text_type_main-small')}>
                 {`+${mockData.count}`}
               </span>
               )}
            </li>
          ))}
        </ul>
        <div className={style.price}>
          <span className="text text_type_digits-default mr-2">{mockData.price}</span>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </li>
  );
}

// BurgerIngredients.propTypes = {
//   cards: PropTypes.arrayOf(cardPropTypes).isRequired,
// };
