import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import { RANGE, mockData } from '../../mocks/order';

import style from './order.module.css';

export default function Order() {
  const location = useLocation();

  return (
    <Link to="/queue/123" state={{ pathname: location.pathname }} className={style.link}>
      <li className={style.order}>
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
    </Link>
  );
}
