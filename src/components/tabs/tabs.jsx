import React from 'react';
import PropTypes from 'prop-types';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

import style from './tabs.module.css';

export default function Tabs({ tabs, current, setCurrent }) {
  return (
    <div className={style.tabs}>
      {tabs.map(({ id, label }) => (
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

const tabPropTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
});

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(tabPropTypes).isRequired,
  current: PropTypes.string.isRequired,
  setCurrent: PropTypes.func,
};
