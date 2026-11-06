import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowIcon } from './Icons';

// Internal routes use a router Link; external URLs use a plain anchor in the same tab.
function ButtonLink({ to, href, variant = 'primary', hero = false, arrow = false, children }) {
  const className = `btn btn--${variant}${hero ? ' btn--hero' : ''}`;
  const inner = (
    <span className="btn__inner">
      {children}
      {arrow && <ArrowIcon />}
    </span>
  );
  return to ? (
    <Link to={to} className={className}>{inner}</Link>
  ) : (
    <a href={href} className={className}>{inner}</a>
  );
}

export default ButtonLink;
