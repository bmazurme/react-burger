import React from 'react';
import {
  ConstructorElement, Button, CurrencyIcon, DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

import style from './burger-constructor.module.css';
import img from '../../images/bun-02.png';

import categories from '../../mocks/data';

function BurgerConstructor() {
  return (
    <section className={style.main}>
      <div className={style.top}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price="200"
          thumbnail={img}
        />
      </div>
      <ul className={style.items} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {categories.map((x, i) => (
          <li className={style.item} key={i}>
            <div className={`${style.drag} mr-4`}>
              <DragIcon type="primary" />
            </div>
            <ConstructorElement
              type={x.type}
              isLocked={x.isLocked}
              text={x.text}
              price={x.price}
              thumbnail={x.image}
            />
          </li>
        ))}
      </ul>
      <div className={style.bottom}>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text="Краторная булка N-200i (низ)"
          price="200"
          thumbnail={img}
        />
      </div>
      <div className={style.footer}>
        <div className={`${style.price} pt-1 pb-2`}>
          <p className='text text_type_digits-medium pr-2'>610</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button htmlType="button" type="primary" size="medium">
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}

export default BurgerConstructor;
