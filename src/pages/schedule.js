import React from 'react';
import Banner from '../components/banner';
import Navbar from '../components/navbar';

const SPRING_2026_SCHEDULE = [
  {
    date: 'April 12',
    location: 'Brownsburg (Bulldog Blvd)',
    games: {
      '12u': ['11am Brownsburg vs Storm', '12pm Storm vs Bloomington'],
      '14u': ['2pm Storm vs Brownsburg', '3pm Storm vs Bloomington'],
    },
  },
  {
    date: 'April 18',
    location: 'Van Hoozen — 11321 Aboite Ctr Rd, Fort Wayne 46814',
    games: {
      '12u & 14u': ['2:30pm Storm vs Heritage Christian'],
    },
  },
  {
    date: 'April 19',
    location: 'Bishop Dwenger — 1300 E. Washington Ctr Rd, Fort Wayne 46825',
    games: {
      '12u': ['12pm Storm vs Zionsville', '2pm Storm vs Zionsville'],
      '14u': ['1pm Storm vs Zionsville', '3pm Storm vs Zionsville'],
    },
  },
  {
    date: 'April 25',
    location: 'Bishop Dwenger',
    note: 'Storm Night @ Dwenger, 4–7pm',
  },
  {
    date: 'April 26',
    location: 'Karst Farm Park — 2450 S. Endwright Rd., Bloomington, IN 47403',
    games: {
      '12u': ['1pm Storm vs Evansville', '2pm Storm vs Bloomington'],
      '14u': ['10am Storm vs Bloomington', '11am Storm vs Evansville'],
    },
  },
  {
    date: 'May 3',
    location: 'Bishop Dwenger (Fort Wayne)',
    games: {
      '12u': ['12pm Storm vs Northridge', '2pm Storm vs Northridge'],
      '14u': ['1pm Storm vs Northridge', '3pm Storm vs Northridge'],
    },
  },
  {
    date: 'May 9',
    location: null,
    note: 'Game vs. Columbus & Castle. Time & location TBD.',
  },
  {
    date: 'May 17',
    location: null,
    note: 'State Tournament. Info TBD.',
  },
];

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
            <p>Sunday Mornings <br />8:00am - 10:00pm <br />January 11th - End of March<br />
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
          <h2>Spring 2026 Games</h2>
          <div className='schedule-cards'>
            {SPRING_2026_SCHEDULE.map((event, index) => (
              <article key={index} className='schedule-card'>
                <h3 className='schedule-card__date'>{event.date}</h3>
                {event.location && <p className='schedule-card__location'>{event.location}</p>}
                {event.note ? (
                  <p className='schedule-card__note'>{event.note}</p>
                ) : (
                  <div className='schedule-card__games'>
                    {Object.entries(event.games).map(([age, list]) => (
                      <div key={age} className='schedule-card__division'>
                        <span className='schedule-card__division-label'>{age}</span>
                        <ul>
                          {list.map((game, i) => (
                            <li key={i}>{game}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schedule;