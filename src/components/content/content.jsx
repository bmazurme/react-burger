import React from 'react';
import PropTypes from 'prop-types';

import AppHeader from '../app-header';

export default function Content({ header, children }) {
  return (
    <>
      {header && <AppHeader />}
      {children}
    </>
  );
}

Content.propTypes = {
  header: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
