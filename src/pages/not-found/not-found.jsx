import React from 'react';

import Content from '../../components/content';
import NotFound from '../../layers/not-found';

function NotFoundPage() {
  return (<Content header children={<NotFound />} />);
}

export default NotFoundPage;
