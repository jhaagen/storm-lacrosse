import React from 'react';
import Banner from '../components/banner';
import Navbar from '../components/navbar';
import { Helmet } from 'react-helmet-async';
import { SEO } from '../App';

function Schedule() {
    return (
      <div className='App'>
        <Helmet>
          <SEO 
            title="Schedule"
            description="View the Fort Wayne Storm lacrosse team's winter training schedule, spring training schedule, and upcoming games for the 2025 season."
          />
        </Helmet>
        <header>
          <Banner></Banner>
        </header>
        <Navbar></Navbar>

        <div className='container'> 
          <div className='columns'>
            <div className='column'>
            <h2>Winter Training Schedule</h2>
            <p>Sunday Mornings <br />10:00am - 12:00pm <br />January 19th - March 23rd <br/>
              At the Plex South (<a href="https://maps.app.goo.gl/dvChNBit198ghRUf6" aria-label="Plex South Map">map</a>) </p>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4356.765437802453!2d-85.21972162289748!3d41.047365971345044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8816070011c9ced7%3A0x28aaee4e8e9abe2f!2sThe%20Plex%20south!5e1!3m2!1sen!2sus!4v1733604252505!5m2!1sen!2sus" width="300" height="225" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Plex South"></iframe>
            </div>

            <div className='column'>
              <h2>Spring Training Schedule</h2>
              <p>Tuesdays & Thursdays <br />6:00pm - 7:30pm <br />Beginning of March - The End of May <br/>
              At Perry Hill Elementary (<a href="https://maps.app.goo.gl/NpiDyWCZtUv2iYRZ6" aria-label="Perry Hill Elementary Map">map</a>) </p>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4348.166947972989!2d-85.13721921318974!3d41.20278843911993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x881608441ccf89cd%3A0x3ee843eaf3f847ee!2sPerry%20Hill%20Elementary%20School!5e1!3m2!1sen!2sus!4v1733604437426!5m2!1sen!2sus" width="300" height="225" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Perry Hill Elementary"></iframe>
            </div>
          </div>
            
            <div className='centered'>
              <br /> <br />
            <h2>Spring 2025 Games</h2>
            <p>
              <table className="schedule-table">
                <tr>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Opponent</th>
                  <th>Location</th>
                </tr>
                <tr>
                  <td>March 23rd</td>
                  <td>11am, 12:15pm, 1:30pm, 2:15pm</td>
                  <td>Westfield</td>
                  <td>Bishop Dwenger</td>
                </tr>
                <tr>
                  <td>April 13th</td>
                  <td>12:00pm, 1:00pm, 2:00pm, 3:00pm</td>
                  <td>Northridge</td>
                  <td>Bishop Dwenger</td>
                </tr>
                <tr>
                  <td>April 19th</td>
                  <td>12:00pm, 1:00pm, 2:00pm, 3:00pm</td>
                  <td>Evansville North &amp; Bloomington</td>
                  <td>Bloomington, IN</td>
                </tr>
                <tr>
                  <td>April 27th</td>
                  <td>11:00am, 12:00pm, 3:00pm, 4:00pm</td>
                  <td>Brownsburg &amp; Noblesville</td>
                  <td>Bishop Dwenger</td>
                </tr>
                <tr>
                  <td>May 3rd</td>
                  <td>1:00am, 12:30pm, 2:00pm</td>
                  <td>Irish Youth Lacrosse &amp; Northridge</td>
                  <td>Van Hoozen Community Park</td>
                </tr>
                <tr>
                  <td>May 4th</td>
                  <td>12:00pm, 1:15pm, 2:30pm, 3:45pm</td>
                  <td>Zionsville &amp; Perry</td>
                  <td>Zionsville, IN</td>
                </tr>
                <tr>
                  <td>May 10th</td>
                  <td>2:00pm, 3:00pm</td>
                  <td>Carmel &amp; Columbus</td>
                  <td>Carmel, IN</td>
                </tr>
                <tr>
                  <td>May 17th</td>
                  <td>TBD</td>
                  <td>TBD</td>
                  <td>Fishers, IN</td>
                </tr>
              </table>

            </p>
            </div>
        </div>
      </div>
        )
    }
;
export default Schedule;