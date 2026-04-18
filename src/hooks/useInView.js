import { useEffect, useRef, useState } from 'react';

/**
 * Returns [ref, inView] — inView flips to true once the element enters
 * the viewport and stays true (triggerOnce behaviour).
 */
const useInView = ({ threshold = 0.12, rootMargin = '0px 0px -40px 0px' } = {}) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, inView];
};

export default useInView;
