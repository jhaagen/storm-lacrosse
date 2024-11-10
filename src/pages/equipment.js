import React from 'react';
import Banner from '../components/banner';
import Navbar from '../components/navbar';
import CTA from '../components/cta';

function Equipment() {
    return (
  
      <div className='App'>
        <header>
          <Banner></Banner>
        </header>
        <Navbar></Navbar>

        <div className='container'> 
            <h2>Rent or Buy</h2>
            <p>Our team has the opportunity to allow new players to rent equipment from the club for a low price. This allows players to try the sport before investing heavily into the equipment.</p>
            <p>If you are interested in renting equipment please contact us and we can ensure we have the gear for your child.
           </p>
           <CTA></CTA>
        </div>
      </div>
        )
    }
;
export default Equipment;