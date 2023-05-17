import React from 'react';

import Content from '../../components/content';
import Signin from '../../layers/signin';

function SigninPage() {
  return (<Content header children={<Signin />} />);
}

export default SigninPage;
