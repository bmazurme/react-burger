import PropTypes from 'prop-types';

import { propsTypes } from './types';

export default function buildProperties({ baseUrl, props }) {
  const currentUrl = props?.url ? `${baseUrl}/${props.url}` : baseUrl;
  const property = {};

  property.method = props?.method ? props.method : 'GET';
  property.headers = { 'Content-Type': 'application/json;charset=utf-8' };

  if (props?.body) {
    property.body = JSON.stringify(props.body);
  }
  // properties...

  return { currentUrl, property };
}

buildProperties.protoType = {
  baseUrl: PropTypes.string.isRequired,
  props: PropTypes.objectOf(propsTypes),
}
