import React from 'react';
import PropTypes from 'prop-types';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

export default function Tabs({ tabs, current, setCurrent }) {
  return (
    <div style={{ display: 'flex', marginTop: 20, alignSelf: 'center' }}>
      {tabs.map(({ id, label }, i) => (
        <Tab
          key={i}
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

Tabs.protoType = {
  tabs: PropTypes.arrayOf(tabPropTypes).isRequired,
  current: PropTypes.string.isRequired,
  setCurrent: PropTypes.func,
};
