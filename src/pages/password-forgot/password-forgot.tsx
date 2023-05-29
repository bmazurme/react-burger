import React from 'react';

import Content from '../../components/content';
import PasswordForgot from '../../layers/password-forgot';

import withUser from '../../hocs/with-user';

function ForgotPage() {
  return (<Content header children={<PasswordForgot />} />);
}

export default withUser(ForgotPage, false);
