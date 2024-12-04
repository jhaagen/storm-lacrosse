import React from 'react';
import Banner from '../components/banner';
import Navbar from '../components/navbar';

function Schedule() {
    return (
  
      <div className='App'>
        <header>
          <Banner></Banner>
        </header>
        <Navbar></Navbar>

        <div className='container'> 
            <h2>Winter Training Schedule</h2>
            <p>Sunday Mornings <br />10:00am - 12:00pm <br />January 19th - The End of March <br/>
              At the Plex South (<a href="https://maps.app.goo.gl/dvChNBit198ghRUf6" aria-label="Plex South Map">map</a>) </p>
              <br />
            <h2>Spring 2025 Games</h2>
            <p>Spring Game Schedule Coming Soon!!

            </p>
        </div>
      </div>
        )
    }
;
export default Schedule;