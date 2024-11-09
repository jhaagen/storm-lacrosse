import React from 'react';
import Banner from '../components/banner';
import Navbar from '../components/navbar';

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
            <h2>Spring 2025 Call Out Meeting</h2>
            <p>We are preparing for our spring 2025 season by having an informational session for players and parents on 12/5/24 at 6:30pm in the conference room on the second floor of Empowered Sports on Lima road.</p>
            <p><a href="https://forms.gle/S41xYkSGMo9fdbAF8">RSVP for the Call Out meeting</a></p>
        </div>
      </div>
        )
    }
;
export default Equipment;