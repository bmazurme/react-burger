import React, { useState } from 'react';
import PropTypes from 'prop-types';

import buildProperties from '../utils/build-properties';

import { propsTypes } from '../utils/types';
import { BASE_URL } from '../utils/config';

export default function useMutation(props) {
  const [state, setState] = useState({ data: [], hasError: false, isLoading: false });

  const postOrder = async (body) => {
    const { currentUrl, options } = buildProperties({ baseUrl: BASE_URL, props: body });

    try {
      const response = await fetch(currentUrl, options);

      if (response.ok) {
        const data = await response.json();
        setState({ data, hasError: false, isLoading: false });
      } else {
        console.log('error response', response.status);
        setState({ data: [], hasError: true, isLoading: false });
      }
    } catch (e) {
      console.log('error api query', e);
      setState({ data: [], hasError: true, isLoading: false });
    }

  };

  return ({ state, postOrder });
}

useMutation.protoType = {
  baseUrl: PropTypes.string.isRequired,
  props: PropTypes.objectOf(propsTypes),
};
