import React from 'react';
import PropTypes from 'prop-types';

import AppHeader from '../app-header';

function Content({ header, children }) {
  return (
    <div className="root">
      {header &&  <AppHeader />}
      {children}
    </div>
  );
}

Content.protoType = {
	header: PropTypes.boolean,
  children: PropTypes.node.isRequired,
}

export default Content;
