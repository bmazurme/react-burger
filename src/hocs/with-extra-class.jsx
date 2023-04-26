import React from 'react';

const withExtraClass = extraClass => WrappedComponent => {
  return function WithExtraClass({ links }) {
    return <WrappedComponent links={links} extraClass={extraClass} />;
  }
}

export default withExtraClass;
