import React from 'react';

const withExtraClass = extraClass => WrappedComponent => {
  return function WithExtraClass({ links, onClick }) {
    return <WrappedComponent links={links} extraClass={extraClass} onClick={onClick} />;
  }
}

export default withExtraClass;
