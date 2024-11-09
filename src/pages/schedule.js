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
            <p>Sunday Mornings January - March <br/>
              At the Plex South </p>
            <h2>Spring 20205 Games</h2>
            <p>Schedule Coming Soon!!

            </p>
        </div>
      </div>
        )
    }
;
export default Schedule;