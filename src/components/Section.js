import React from 'react';

function Section({ tone = 'dark', angle, className = '', children, ...rest }) {
  const classes = ['section', `section--${tone}`, angle && `section--angle-${angle}`, className]
    .filter(Boolean)
    .join(' ');
  return (
    <section className={classes} {...rest}>
      <div className="wrap">{children}</div>
    </section>
  );
}

export default Section;
