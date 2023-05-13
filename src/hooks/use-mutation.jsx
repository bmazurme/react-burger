import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { BASE_URL, propsTypes, buildProperties } from '../utils';

export default function useMutation(props) {
  const [state, setState] = useState({ data: [], hasError: false, isLoading: false });

  const post = async (body) => {
    const { currentUrl, options } = buildProperties({ baseUrl: BASE_URL, props: body });

    try {
      const response = await fetch(currentUrl, options);

      if (response.ok) {
        const data = await response.json();
        setState({ data, hasError: false, isLoading: false });
      } else {
        // console.log('error response', response.status);
        setState({ data: [], hasError: true, isLoading: false });
      }
    } catch (e) {
      console.log('error api query', e);
      setState({ data: [], hasError: true, isLoading: false });
    }
  };

  const clear = () => setState({ data: [], hasError: false, isLoading: false });

  return ({ state, post, clear });
}

useMutation.propTypes = {
  baseUrl: PropTypes.string.isRequired,
  props: PropTypes.objectOf(propsTypes),
};
