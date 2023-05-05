import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import Group from '../group';
import { cardPropTypes } from '../../utils/types';

import style from './groups.module.css';

export default function Groups(props) {
  const { groups } = props;
  const refBun = useRef();
  const refMain = useRef();
  const refSauce = useRef();
  const refs = [refBun, refMain, refSauce];
  
  const withRef = groups.map((x, i) => ({ ...x, refCurr: refs[i] }));

  const onScroll = (e) => {
    console.log(
      e.currentTarget.scrollTop, 
      refBun.scrollHeight, 
      );
  };

  return (
    <ul className={style.groups} onScroll={onScroll}>
      {withRef.map((group, i) => <Group {...group} {...props} key={i} />)}      
    </ul>
  );
}

const groupPropTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
});

Groups.protoType = {
  cards: PropTypes.arrayOf(cardPropTypes).isRequired,
  groups: PropTypes.arrayOf(groupPropTypes),
  onClick: PropTypes.func.isRequired,
};
