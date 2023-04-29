import React from 'react';
import PropTypes from 'prop-types';

import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';

export default function ConstructorBlock(props) {
  const {
    position, style, name, image,
  } = props;

  return (position
    ? (
      <div className={style.top}>
        <ConstructorElement
          {...props}
          type={position === 'top' ? 'top' : 'bottom'}
          text={`${name} (${position === 'top' ? 'верх' : 'низ'})`}
        />
      </div>
    )
    : (
      <li className={style.item}>
        <div className={`${style.drag} mr-4`}>
          <DragIcon type="primary" />
        </div>
        <ConstructorElement {...props} thumbnail={image} text={name} />
      </li>
    ));
}

ConstructorBlock.protoType = {
  _id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string,
  style: PropTypes.object.isRequired,
};
