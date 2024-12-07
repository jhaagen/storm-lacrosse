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
            <h2>Lacrosse Equipment</h2>
            <p>Our team has the opportunity to allow new players to borrow equipment from the club. This allows players to try the sport before investing heavily into the equipment.</p>
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
            
            <p>If you are interested in borrowing equipment please contact us and we can ensure we have the gear for your child.
           </p>

           <h2>Suggested Vendors for Gear</h2>
           <p>
            <a target='_blank' rel="noreferrer" href="https://www.lacrossemonkey.com/">Lacrosse Monkey</a>
            <a target='_blank' rel="noreferrer" href="https://empirelax.com/">Empire Lacrosse</a>
            
           </p>

           <h2>Tips to maintiain lacrosse gear</h2>
           <p>DO NOT leave equipment, especially if damp/wet/sweaty in lacrosse bag. Water is the enemy of most sports gear and equipment. Airing out equipment will help maintain its condition and prevent bacteria and fungus, aka MOLD. If any equipment is damp/wet/sweaty, take it out of the lacrosse bag to dry every day!
            </p>
            <p>Athletes sweat; lacrosse gear smells. Use of anti-bacterial/anti-fungus sanitizing spray may help.
            </p>
            <h3>Maintenance and cleaning:</h3>
            <p>
            Helmet/chest protector/gloves/pads can be cleaned with a damp cloth and sanitized with anti-bacterial spray. When wet/sweaty, newspaper can be stuffed into the gloves to absorb moisture.
            Stick pocket rinse in cold water; push pocket back out and form the way the player wants. Place crinkled up newspaper in the mesh pocket to absorb moisture.
            </p>

           <CTA></CTA>
        </div>
      </div>
        )
    }
;
export default Equipment;