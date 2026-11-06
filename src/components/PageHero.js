import React from 'react';
import Eyebrow from './Eyebrow';

// Renders the page's only h1. `title` is a node so part of it can be green.
function PageHero({ eyebrow, title, lead, outlineWord, aside, children }) {
  return (
    <section className="page-hero">
      {outlineWord && (
        <div className="page-hero__outline" aria-hidden="true">
          <span className="outline-word">{outlineWord}</span>
        </div>
      )}
      <div className="wrap page-hero__inner">
        <div className="row">
          <div className="col page-hero__main">
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            <h1 className="display h1-page">{title}</h1>
            {lead && <p className="lead">{lead}</p>}
            {children}
          </div>
          {aside && <div className="col page-hero__aside">{aside}</div>}
        </div>
      </div>
    </section>
  );
}

export default PageHero;
