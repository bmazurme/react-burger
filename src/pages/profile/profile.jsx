import React from 'react';

import Content from '../../components/content';
import Profile from '../../layers/profile';

import withUser from '../../hocs/with-user';

function ProfilePage() {
  return (<Content header children={<Profile />} />);
}

export default withUser(ProfilePage, true);
