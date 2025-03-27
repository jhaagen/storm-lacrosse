import React from 'react';
import Banner from '../components/banner';
import Navbar from '../components/navbar';
import SEO from '../components/seo';

function PageNotFound() {
  return (
    <div className='App'>
      <SEO />
      <header>
        <Banner></Banner>
      </header>
      <Navbar></Navbar>

      <div className='container'>
        <h2>Page Not Found</h2>
        <p>The page you are looking for could not be found. Please contact us with any issues you may be experiencing.</p>
      </div>
    </div>
  );
}

export default PageNotFound;