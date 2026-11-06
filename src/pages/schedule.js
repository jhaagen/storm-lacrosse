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
            <p>Sunday Mornings <br />8:00am - 10:00am <br />January 10th - End of March<br />
              At PSM Empowered (<a href="https://maps.app.goo.gl/fTatdYHzMGEiv4Az7" aria-label="PSM Empowered">map</a>) </p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3053.011948370305!2d-85.16902202405102!3d41.195753307860066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8815e375e367880f%3A0x8c2de7590d02399e!2sPSM%20Empowered!5e1!3m2!1sen!2sus!4v1761570952453!5m2!1sen!2sus" width="300" height="225" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="PSM Empowered"></iframe>
          </div>

          <div className='column'>
            <h2>Spring Training Schedule</h2>
            <p>Tuesdays & Thursdays <br />6:00pm - 7:30pm <br />Beginning of March - The End of May <br />
              At Perry Hill Elementary (<a href="https://maps.app.goo.gl/NpiDyWCZtUv2iYRZ6" aria-label="Perry Hill Elementary Map">map</a>) </p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4348.166947972989!2d-85.13721921318974!3d41.20278843911993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x881608441ccf89cd%3A0x3ee843eaf3f847ee!2sPerry%20Hill%20Elementary%20School!5e1!3m2!1sen!2sus!4v1733604437426!5m2!1sen!2sus" width="300" height="225" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Perry Hill Elementary"></iframe>
          </div>
        </div>

        <div className='schedule-section'>
          <h2>Spring 2027 Games</h2>
          <p>The 2027 game schedule is coming soon. Check back here or on GameChanger for updates.</p>
        </div>
      </div>
    </div>
  );
}

export default Schedule;