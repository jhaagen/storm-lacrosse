import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import SiteHeader from './SiteHeader';
import Footer from './Footer';

function Layout({ children }) {
  const { pathname } = useLocation();
  const mainRef = useRef(null);
  const isFirstRender = useRef(true);

  // On route changes (not the first load), reset scroll and move focus to the new content.
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    window.scrollTo(0, 0);
    mainRef.current?.focus();
  }, [pathname]);

  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      <SiteHeader />
      <main id="main" tabIndex="-1" ref={mainRef}>
        {children}
      </main>
      <Footer compact={pathname.replace(/\/$/, '') === '/contact'} />
    </>
  );
}

export default Layout;
