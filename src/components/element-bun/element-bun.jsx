import React from 'react';
import PropTypes from 'prop-types';

import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';

import getBackgroundColor from '../../utils/get-background-color';

import style from './element-bun.module.css';

export default function ElementBun(props) {
  const {
    position, name, isOver, canDrop, refBunTop,
  } = props;

  return (
    <div
      ref={refBunTop}
      className={`${position === 'top' ? style.top : style.bottom} ${!name && style.border}`}
      style={{ backgroundColor: getBackgroundColor(isOver, canDrop) }}
    >
      {
        !name
          ? <span className={`${style.description} text text_type_main-small`}>+ булку</span>
          : (
            <ConstructorElement
              {...props}
              type={position}
              text={`${name} (${position === 'top' ? 'верх' : 'низ'})`}
            />
          )
      }
    </div>
  );
}

ElementBun.protoType = {
  _id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string,
  setCurrent: PropTypes.func.isRequired,
  isOver: PropTypes.bool.isRequired,
  canDrop: PropTypes.bool.isRequired,
  refBunTop: PropTypes.any.isRequired,
};
