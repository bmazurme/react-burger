import React from 'react';

export default function Icon({ component: Component, active }) {
  return <Component type={active ? 'primary' : 'secondary'} />;
}
