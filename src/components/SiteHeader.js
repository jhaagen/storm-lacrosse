import React, { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import ButtonLink from './ButtonLink';
import { links } from '../data/season';
import './SiteHeader.scss';

const NAV_ITEMS = [
  { to: '/', label: 'Home', end: true },
  { to: '/registration/', label: 'Registration' },
  { to: '/schedule/', label: 'Schedule' },
  { to: '/equipment/', label: 'Equipment' },
  { to: '/area-teams/', label: 'Area Teams' },
  { to: '/contact/', label: 'Contact' },
];

function SiteHeader() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <header className="site-header">
      <div className="wrap site-header__bar">
        <Link to="/" className="site-header__brand">
          <img src="/assets/storm-logo.png" alt="" width="72" height="56" />
          <span className="site-header__brand-text">
            <span className="site-header__name">Storm</span>
            <span className="site-header__tagline">Fort Wayne Boys Lacrosse</span>
          </span>
        </Link>

        <button
          type="button"
          ref={buttonRef}
          className="site-header__toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((value) => !value)}
        >
          Menu
        </button>

        <div id="primary-nav" className={`site-header__menu${open ? ' is-open' : ''}`}>
          <nav aria-label="Main">
            <ul className="plain-list site-header__links">
              {NAV_ITEMS.map((item) => (
                <li key={item.to}>
                  <NavLink to={item.to} end={item.end} className="site-header__link">
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <ButtonLink href={links.registration}>Register</ButtonLink>
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;
