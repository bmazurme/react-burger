import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import buildProperties from '../utils/build-properties';

import { propsTypes } from '../utils/types';
import { BASE_URL } from '../utils/config';

export default function useQuery(props) {
  const [state, setState] = useState({ data: [], hasError: true, isLoading: true });

  useEffect(() => {
    async function getData(props) {
      const { currentUrl, property } = buildProperties({ baseUrl: BASE_URL, props });

      try {
        const result = await fetch(currentUrl, property);
        const data = await result.json();
        setState({ data: data.data, hasError: false, isLoading: false });
      } catch (e) {
        console.log('error api query', e);
        setState({ data: [], hasError: true, isLoading: false });
      }
    }

    getData(props);
  }, [])

  return (state);
}

useQuery.protoType = {
  baseUrl: PropTypes.string.isRequired,
  props: PropTypes.objectOf(propsTypes),
}
