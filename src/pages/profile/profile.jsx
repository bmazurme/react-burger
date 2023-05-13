import React from 'react';

import Content from '../../components/content';
import Profile from '../../layers/profile';

function ProfilePage() {
  return (<Content header children={<Profile />} />);
}
// hoc
export default ProfilePage;
