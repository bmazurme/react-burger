import React from 'react';
import PropTypes from 'prop-types';

import ElementBun from '../element-bun';
import ElementMain from '../element-main';

export default function ConstructorBlock(props) {
  const { position } = props;

  return (position ? <ElementBun position={position} /> : <ElementMain {...props} />);
}

ConstructorBlock.propTypes = {
  _id: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.number,
  name: PropTypes.string,
  position: PropTypes.string,
};
