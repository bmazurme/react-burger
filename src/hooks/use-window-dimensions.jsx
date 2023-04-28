import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;

  return { width, height };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

const visibleBlocksNumber = {
  0: { blocks: 1 },
  1: { blocks: 2 },
};

export function getVisualProps({ width }) {
  let point = 0;

  if (width > 1023) {
    point = 1;
  }

  return visibleBlocksNumber[point];
}
