import React, { useRef, UIEvent, RefObject } from 'react';

import Group from '../group';

import style from './groups.module.css';

type TypeGroup = { id: string, label: string, refCurr: RefObject<HTMLLIElement> };

export default function Groups(props: {
  groups: { id: string, label: string }[],
  setCurrent: (id: string) => void,
  cards: TypeCard[] }) {
  const { groups, setCurrent, cards } = props;
  const refs1 = useRef<HTMLLIElement | null>(null);
  const refs2 = useRef<HTMLLIElement | null>(null);
  const refs3 = useRef<HTMLLIElement | null>(null);
  const refs = [refs1, refs2, refs3];

  const groupsWithRef = groups.map((x: { id: string, label: string }, i: number) => (
    { ...x, refCurr: refs[i] }
  ));

  const onScroll = (e: UIEvent) => {
    const scroll = e.currentTarget.scrollTop;
    const scrollViewHeight = e.currentTarget.clientHeight;
    const groupBun = refs1.current!.scrollHeight!;
    const groupMain = refs2.current!.scrollHeight!;
    const groupSauce = refs3.current!.scrollHeight!;

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
      {groupsWithRef.map((group: TypeGroup) => <Group {...group} cards={cards} key={group.id} />)}
    </ul>
  );
}
