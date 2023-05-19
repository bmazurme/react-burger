import React from 'react';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

import style from './tabs.module.css';

export default function Tabs({ tabs, current, setCurrent }: {
  tabs: { id: string, label: string }[],
  current: string,
  setCurrent: (value: string) => void,

}) {
  return (
    <div className={style.tabs}>
      {tabs.map(({ id, label }: { id: string, label: string }) => (
        <Tab
          key={id}
          value={id}
          active={current === id}
          onClick={() => setCurrent(id)}
        >
          {label}
        </Tab>
      ))}
    </div>
  );
}
