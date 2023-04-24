import React from 'react';
import PropTypes from 'prop-types';

import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';

export default function ConstructorBlock(props) {
  const { position, style } = props;

  return (position
    ? <div className={style.top}>
        <ConstructorElement {...props} type={position === 'top' ? 'top' : 'bottom'} />
      </div>
    : <li className={style.item}>
        <div className={`${style.drag} mr-4`}>
          <DragIcon type="primary" />
        </div>
        <ConstructorElement {...props} thumbnail={props.image} />
      </li>);
}

ConstructorBlock.protoType = {
  position: PropTypes.string,
  style: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
}
