import React, { useRef, UIEvent, RefObject } from 'react';

import Group from '../group';

import style from './groups.module.css';

type TypeGroup = { id: string, label: string, refCurr: RefObject<HTMLLIElement> };

export default function Groups(props: {
  groups: { id: string, label: string }[],
  setCurrent: (id: string) => void,
  cards: TypeCard[] }) {
  const { groups, setCurrent, cards } = props;
  const refs = Array.from(Array(groups.length), () => useRef<HTMLLIElement | null>(null));
  const groupsWithRef = groups.map((x, i) => ({ ...x, refCurr: refs[i] }));

  const onScroll = (e: UIEvent<HTMLElement>) => {
    const scroll = e.currentTarget.scrollTop;
    const types = refs.map((ref) => (ref.current!.scrollHeight!));
    let d = 0;

    types.forEach((x, i) => {
      if (scroll < types[0]) {
        setCurrent('0');
      } else if (scroll < d + x && scroll >= d - 0.5 * x) {
        setCurrent(i.toString());
      }

      d += x;
    });
  };

  return (
    <ul className={style.groups} onScroll={onScroll}>
      {groupsWithRef.map((group: TypeGroup) => <Group {...group} cards={cards} key={group.id} />)}
    </ul>
  );
}
