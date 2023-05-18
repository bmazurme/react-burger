import React from 'react';
import { Outlet } from 'react-router';

import Sidebar from '../../components/sidebar';

import useWindowDimensions, { getVisualProps } from '../../hooks/use-window-dimensions';

import style from './profile.module.css';

export default function Profile() {
  const { blocks } = getVisualProps(useWindowDimensions());

  return (
    <div className={style.main}>
      <Sidebar />
      <Outlet />
    </div>
  );
}
