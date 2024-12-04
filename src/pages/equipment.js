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
            <p>The required equipment to play lacrosse at this level is the following
              <ul>
                <li>A properly fitting lacrosse helmet</li>
                <li>Elbow pads</li>
                <li>Lacrosse Gloves</li>
                <li>Cleats</li>
                <li>Chest Protector</li>
                <li>Lacrosse Stick</li>
                <li>Athletic Cup</li>
                <li>Mouth Guard</li>
                <li>Goalies have some specialized equipment, please discuss with us first to ensure you have the proper gear to be a goalie.</li>
              </ul>

            </p>
            
            <p>If you are interested in renting equipment please contact us and we can ensure we have the gear for your child.
           </p>
           <CTA></CTA>
        </div>
      </div>
        )
    }
;
export default Equipment;