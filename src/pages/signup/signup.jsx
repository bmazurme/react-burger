import React from 'react';

import Content from '../../components/content';
import Signup from '../../layers/signup';

function SignupPage() {
  return (<Content header children={<Signup />} />);
}

export default SignupPage;
