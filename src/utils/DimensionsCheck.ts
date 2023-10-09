import { useEffect, useRef, useState } from 'react';

function useElementResize() {
  const [elementSize, setElementSize] = useState({
    width: 0,
    height: 0,
  });

  const elementRef = useRef(null);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        setElementSize({ width, height });
      }
    });

    if (elementRef.current) {
      resizeObserver.observe(elementRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return { elementRef, elementSize };
}

export default useElementResize;
