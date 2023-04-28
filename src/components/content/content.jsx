import React from 'react';
import PropTypes from 'prop-types';

import AppHeader from '../app-header';

function Content({ header, children }) {
  return (
    <>
      {header && <AppHeader />}
      {children}
    </>
  );
}

Content.protoType = {
	header: PropTypes.bool,
  children: PropTypes.node.isRequired,
}

export default Content;
