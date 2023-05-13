import React from 'react';

import Content from '../../components/content';
import Queue from '../../layers/queue';

function QueuePage() {
  return (<Content header children={<Queue />} />);
}
// hoc
export default QueuePage;
