import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  delayMs?: number;
  distancePx?: number;
  durationMs?: number;
  ease?: string;
  blurPx?: number;
};

export default function Reveal({
  children,
  delayMs = 0,
  distancePx = 16,
  durationMs = 600,
  ease = 'ease',
  blurPx = 0,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setVisible(true), delayMs);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [delayMs]);

  const transform = visible ? 'translateY(0px)' : `translateY(${distancePx}px)`;
  const opacity = visible ? 1 : 0;
  const filter = visible ? 'blur(0px)' : `blur(${blurPx}px)`;

  return (
    <div
      ref={ref}
      style={{
        transform,
        opacity,
        filter,
        transition: `transform ${durationMs}ms ${ease}, opacity ${durationMs}ms ${ease}, filter ${durationMs}ms ${ease}`,
        willChange: 'transform, opacity, filter',
      }}>
      {children}
    </div>
  );
}
