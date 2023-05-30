import React from 'react';
import { useDrop } from 'react-dnd';

import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';

import { setBun, selectBurger } from '../../store/slices';
import { useAppSelector, useAppDispatch } from '../../hooks';
import {
  MAIN, BUN, SAUCE, filterObject, getBackgroundColor,
} from '../../utils';

import style from './element-bun.module.css';

type TypeConstructor = {
  text: string;
  thumbnail: string;
  price: number;
  type?: 'top' | 'bottom' | undefined;
  isLocked?: boolean | undefined;
  extraClass?: string | undefined;
  handleClose?: (() => void) | undefined;
};

export default function ElementBun(props: { position: 'top' | 'bottom' | undefined }) {
  const { position } = props;
  const dispatch = useAppDispatch();
  const { bun = null } = useAppSelector(selectBurger);
  const getName = `${bun?.name} (${position === 'top' ? 'верх' : 'низ'})`;
  const getClass = () => `${style.description} text text_type_main-small text_color_inactive`;

  const [{ isOver, canDrop }, refBunTop] = useDrop({
    accept: [BUN, MAIN, SAUCE],
    drop: (c: TypeCard) => {
      dispatch(setBun({ ...filterObject(c), isLocked: true }));

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
        : (<ConstructorElement {...bun as TypeConstructor} type={position} text={getName} />)}
    </div>
  );
}
