import React from 'react';

import Content from '../../components/content';
import Forgot from '../../layers/forgot';

import withUser from '../../hocs/with-user';

function ForgotPage() {
  return (<Content header children={<Forgot />} />);
}

export default withUser(ForgotPage, false);
