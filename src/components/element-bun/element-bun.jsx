import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useDrop } from 'react-dnd';

import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';

import { BurgerContext } from '../../context/burger-context';
import getBackgroundColor from '../../utils/get-background-color';
import filterObject from '../../utils/filter-object';

import { MAIN, BUN, SAUCE } from '../../utils/constants';

import style from './element-bun.module.css';

export default function ElementBun(props) {
  const { burger, setBurger} = useContext(BurgerContext);
  const { position } = props;
  const { bun = null } = burger; 
  const getName = `${bun?.name} (${position === 'top' ? 'верх' : 'низ'})`;
  const getClass = () => `${style.description} text text_type_main-small text_color_inactive`;

  const [{ isOver, canDrop }, refBunTop] = useDrop({
    accept: [BUN, MAIN, SAUCE],
    drop: (c) => {
      setBurger({ 
        ...burger,
        bun: { ...filterObject(c), isLocked: true }
      });

      return c;
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
    canDrop: ({ type }) => type === BUN,
  });

  return (
    <div
      ref={refBunTop}
      className={`${position === 'top' ? style.top : style.bottom} ${!bun?.name && style.border}`}
      style={{ backgroundColor: getBackgroundColor(isOver, canDrop) }}
    >
      {!bun?.name
        ? (<span className={getClass()}>+ булку</span>)
        : (<ConstructorElement {...bun} type={position} text={getName} />)}
    </div>
  );
}

ElementBun.protoType = {
  position: PropTypes.string,
};
