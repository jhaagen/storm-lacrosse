import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SEO } from '../App';

function PageNotFound() {
  return (
    <div className='App'>
      <Helmet>
        <SEO 
          title="Page Not Found"
          description="The page you are looking for could not be found. Please contact us with any issues you may be experiencing."
        />
      </Helmet>
      <header>
      </header>
      <div>
        <div className='container'>
          <h2>Specializing in:</h2>
          <p className='not-found'>We can't find the page you are looking for. Please contact us with any issues you may be experiencing.</p>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;