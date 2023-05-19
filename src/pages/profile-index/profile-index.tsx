/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import ProfileIndex from '../../layers/profile-index';

import useWindowDimensions, { getVisualProps } from '../../hooks/use-window-dimensions';
import withUser from '../../hocs/with-user';

function ProfileIndexPage() {
  const { blocks } = getVisualProps(useWindowDimensions());
  const isMobile = blocks === 1;

  return (<ProfileIndex />);
}

export default withUser(ProfileIndexPage, true);
