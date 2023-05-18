import React from 'react';

import Content from '../../components/content';
import Queue from '../../layers/queue';

import withUser from '../../hocs/with-user';

function QueuePage() {
  return (<Content header children={<Queue />} />);
}

export default withUser(QueuePage, false);
