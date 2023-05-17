import React from 'react';

import Content from '../../components/content';
import Signin from '../../layers/signin';

import withUser from '../../hocs/with-user';

function SigninPage() {
  return (<Content header children={<Signin />} />);
}

export default withUser(SigninPage, false);
