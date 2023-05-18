import React from 'react';

import Content from '../../components/content';
import Signup from '../../layers/signup';

import withUser from '../../hocs/with-user';

function SignupPage() {
  return (<Content header children={<Signup />} />);
}

export default withUser(SignupPage, false);
