import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

import Group from '../group';
import { cardPropTypes } from '../../utils/types';

import style from './groups.module.css';

export default function Groups(props) {
  const { groups, setCurrent } = props;
  const refs1 = useRef();
  const refs2 = useRef();
  const refs3 = useRef();
  const refs = [refs1, refs2, refs3];
  const groupsWithRef = groups.map((x, i) => ({ ...x, refCurr: refs[i] }));

  const onScroll = (e) => {
    const scroll = e.currentTarget.scrollTop;
    const scrollViewHeight = e.currentTarget.clientHeight;
    const groupBun = refs1.current.scrollHeight;
    const groupMain = refs2.current.scrollHeight;
    const groupSauce = refs3.current.scrollHeight;

    if (scroll < groupBun) {
      setCurrent('0');
    } else if (scroll >= groupBun && scroll + scrollViewHeight * 0.5 < groupBun + groupMain) {
      setCurrent('1');
    } else if (scroll + scrollViewHeight * 0.5 >= groupBun + groupMain) {
      setCurrent('2');
    }
  };

  return (
    <ul className={style.groups} onScroll={onScroll}>
      {groupsWithRef.map((group) => <Group {...group} {...props} key={group.id} />)}
    </ul>
  );
}

const groupPropTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
});

Groups.propTypes = {
  cards: PropTypes.arrayOf(cardPropTypes).isRequired,
  groups: PropTypes.arrayOf(groupPropTypes),
  onClick: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
};
