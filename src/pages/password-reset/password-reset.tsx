import React from 'react';

import Content from '../../components/content';
import PasswordReset from '../../layers/password-reset';

import withUser from '../../hocs/with-user';

function ResetPage() {
  return (<Content header children={<PasswordReset />} />);
}

export default withUser(ResetPage, false);
