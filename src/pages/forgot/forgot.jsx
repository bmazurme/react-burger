import React from 'react';

import Content from '../../components/content';
import Forgot from '../../layers/forgot/forgot';

function ForgotPage() {
  return (<Content header children={<Forgot />} />);
}
// hoc
export default ForgotPage;
