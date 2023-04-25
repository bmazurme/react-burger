import React, { useEffect, useState } from 'react';

import { BASE_URL } from '../utils/config';

export default function useQuery() {
  const [state, setState] = useState({ data: [], hasError: true, isLoading: true });

  useEffect(() => {
    async function getData() {
      try {
        const result = await fetch(BASE_URL);
        const data = await result.json();
        setState({ data: data.data, hasError: false, isLoading: false });
      }
      catch (e) {
        setState({ data: [], hasError: true, isLoading: false });
      }
    }

    getData();
  }, [])

  return (state);
}
