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
          <div className='columns'>
            <div className='column'>
            <h2>Winter Training Schedule</h2>
            <p>Sunday Mornings <br />10:00am - 12:00pm <br />January 19th - The End of March <br/>
              At the Plex South (<a href="https://maps.app.goo.gl/dvChNBit198ghRUf6" aria-label="Plex South Map">map</a>) </p>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4356.765437802453!2d-85.21972162289748!3d41.047365971345044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8816070011c9ced7%3A0x28aaee4e8e9abe2f!2sThe%20Plex%20south!5e1!3m2!1sen!2sus!4v1733604252505!5m2!1sen!2sus" width="300" height="225" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div className='column'>
              <h2>Spring Training Schedule</h2>
              <p>Sunday Mornings <br />10:00am - 12:00pm <br />January 19th - The End of March <br/>
              At the Plex South (<a href="https://maps.app.goo.gl/dvChNBit198ghRUf6" aria-label="Plex South Map">map</a>) </p>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4348.166947972989!2d-85.13721921318974!3d41.20278843911993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x881608441ccf89cd%3A0x3ee843eaf3f847ee!2sPerry%20Hill%20Elementary%20School!5e1!3m2!1sen!2sus!4v1733604437426!5m2!1sen!2sus" width="300" height="225" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
            
            <div className='centered'>
              <br /> <br />
            <h2>Spring 2025 Games</h2>
            <p>Spring Game Schedule Coming Soon!!

            </p>
            </div>
        </div>
      </div>
        )
    }
;
export default Schedule;