import NavBar from '../modules/common/navbar/NavBar';
import Footer from '../modules/common/footer/Footer';
import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type MainProps = {
  children: ReactNode;
};

export default function Main({ children }: MainProps) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [location.pathname, location.search, location.hash]);

  return (
    <div className='min-h-screen flex flex-col'>
      <NavBar />
      <main className='flex-1'>{children}</main>
      <Footer />
    </div>
  );
}
