import React from 'react';

const withExtraClass = (extraClass) => (Component) => function WithExtraClass({ links, onClick }) {
  return <Component links={links} extraClass={extraClass} onClick={onClick} />;
};

export default withExtraClass;
