'use client';

import { useEffect, useRef } from 'react';

type Props = {
  children: React.ReactNode;
  delay?: number;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
};

export default function Reveal({ children, delay = 0, as = 'div', className = '' }: Props) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-visible');
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.transitionDelay = `${delay}ms`;
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: '0px 0px -40px 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  const Tag = as as any;
  return (
    <Tag ref={ref as any} className={`reveal ${className}`.trim()}>
      {children}
    </Tag>
  );
}
