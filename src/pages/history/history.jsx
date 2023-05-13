import React from 'react';

import Content from '../../components/content';
import History from '../../layers/history';

function HistoryPage() {
  return (<Content header children={<History />} />);
}
// hoc
export default HistoryPage;
