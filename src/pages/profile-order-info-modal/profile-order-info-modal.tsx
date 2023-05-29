import React from 'react';

import ProfileOrderInfoModal from '../../layers/profile-order-info-modal';

import withUser from '../../hocs/with-user';

function ProfileOrderInfoModalPage() {
  return (<ProfileOrderInfoModal />);
}

export default withUser(ProfileOrderInfoModalPage, false);
