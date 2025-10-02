import { useEffect, useState } from 'react';
import { FiArrowUp } from 'react-icons/fi';

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => {
      const mobile = window.innerWidth <= 640;
      setIsMobile(mobile);
      const threshold = mobile ? 120 : 400;
      setVisible(window.scrollY > threshold);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update, { passive: true } as any);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label='Back to top'
      className='fixed z-50 rounded-full shadow-lg bg-violet-600 hover:bg-violet-500 text-white transition-colors bottom-16 right-4 p-4 md:bottom-6 md:right-6 md:p-3'
      style={{ WebkitTapHighlightColor: 'transparent' }}>
      <FiArrowUp size={isMobile ? 22 : 20} />
    </button>
  );
}
