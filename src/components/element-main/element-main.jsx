import React from 'react';
import PropTypes from 'prop-types';

import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import style from './element-main.module.css';

export default function ElementMain(props) {
  const {
    name, image, index, opacity, refMain, removeElement,
  } = props;

  return (
    <li className={style.item} style={{ opacity }} ref={refMain}>
      <div className={`${style.drag} mr-2`}>
        <DragIcon type="primary" />
      </div>
      <ConstructorElement
        {...props}
        thumbnail={image}
        text={name}
        handleClose={() => removeElement(index)}
      />
    </li>
  );
}

ElementMain.protoType = {
  _id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  opacity: PropTypes.object.isRequired,
  ref: PropTypes.any.isRequired,
  removeElement: PropTypes.func.isRequired,
};
