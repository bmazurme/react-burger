import React from 'react';
import PropTypes from 'prop-types';

import ElementBun from '../element-bun';
import ElementMain from '../element-main';

export default function ConstructorBlock(props) {
  const { position } = props;

  return (position ? <ElementBun position={position} /> : <ElementMain {...props} />);
}

ConstructorBlock.protoType = {
  _id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string,
};
