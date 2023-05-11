import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { buildProperties, BASE_URL, propsTypes } from '../utils';

export default function useQuery(props) {
  const [state, setState] = useState({ data: [], hasError: true, isLoading: true });

  useEffect(() => {
    // eslint-disable-next-line no-shadow
    async function getData(props) {
      const { currentUrl, options } = buildProperties({ baseUrl: BASE_URL, props });

      try {
        const response = await fetch(currentUrl, options);
        // const onSuccess = () => ... with mutation ...
        // ... res.json().then((err) => Promise.reject(err) ...
        if (response.ok) {
          const { data } = await response.json();
          setState({ data, hasError: false, isLoading: false });
        } else {
          console.log('error response', response.status);
          setState({ data: [], hasError: true, isLoading: false });
        }
      } catch (e) {
        console.log('error api query', e);
        setState({ data: [], hasError: true, isLoading: false });
      }
    }

    getData(props);
  }, []);

  return (state);
}

useQuery.propTypes = {
  baseUrl: PropTypes.string.isRequired,
  props: PropTypes.objectOf(propsTypes),
};
