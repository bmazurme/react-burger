import React from 'react';

import ConstructorBlock from '../constructor-block';
import ConstructorFooter from '../constructor-footer';

import cards from '../../mocks/data';

import style from './burger-constructor.module.css';

const blockStyle = { display: 'flex', flexDirection: 'column', gap: '10px' };

export default function BurgerConstructor() {
  const currentBun = {
    ...cards[0],
    thumbnail: cards[0].image,
    isLocked: true,
  };

  return (
    <section className={style.main}>
      <ConstructorBlock {...currentBun} position="top" style={style} />
      <ul className={style.items} style={blockStyle} >
        {cards.map((x, i) => (
          <ConstructorBlock key={i} {...x} style={style} />
        ))}
      </ul>
      <ConstructorBlock {...currentBun} position="bottom" style={style} />
      <ConstructorFooter />
    </section>
  );
}
