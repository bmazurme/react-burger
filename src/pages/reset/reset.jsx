import React from 'react';

import Content from '../../components/content';
import Reset from '../../layers/reset';

import withUser from '../../hocs/with-user';

function ResetPage() {
  return (<Content header children={<Reset />} />);
}

export default withUser(ResetPage, false);
