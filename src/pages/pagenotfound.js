import React from 'react';
import ButtonLink from '../components/ButtonLink';
import PageHero from '../components/PageHero';

function PageNotFound() {
  return (
    <PageHero
      title="Page not found"
      lead="The page you are looking for could not be found. Please contact us with any issues you may be experiencing."
    >
      <div className="not-found__actions">
        <ButtonLink to="/" arrow>Back to home</ButtonLink>
      </div>
    </PageHero>
  );
}

export default PageNotFound;
