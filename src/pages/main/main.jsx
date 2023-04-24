import React from 'react';

import Content from '../../components/content';
import Main from '../../layers/main';

function MainPage() {
  return (<Content header children={<Main />} />);
}
// hoc
export default MainPage;
