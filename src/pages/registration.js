import React from 'react';
import Banner from '../components/banner';
import Navbar from '../components/navbar';
import CTA from '../components/cta';

function Registration() {
    return (
  
      <div className='App'>
        <header>
          <Banner></Banner>
        </header>
        <Navbar></Navbar>

        <div className='container'> 
            <h2>Spring 2025 Registration</h2>
            <p>Information coming soon!</p>
            
            <CTA>
            </CTA>
        </div>
      </div>
        )
    }
;
export default Registration;