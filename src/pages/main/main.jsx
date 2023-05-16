import React from 'react';

import Content from '../../components/content';
import Main from '../../layers/main';

import withUser from '../../hocs/with-user';

function MainPage() {
  return (<Content header children={<Main />} />);
}

export default withUser(MainPage, false);
