import React from 'react';

import Content from '../../components/content';
import Reset from '../../layers/reset';

function ResetPage() {
  return (<Content header children={<Reset />} />);
}
// hoc
export default ResetPage;
