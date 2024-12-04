import React from 'react';
import Banner from '../components/banner';
import Navbar from '../components/navbar';
import CTA from '../components/cta';

function Registration() {
    return (
  
      <div className='App'>
        <header>
          <Banner></Banner>
        </header>
        <Navbar></Navbar>

        <div className='container'> 
            <h2>Spring 2025 Registration</h2>
            <p>Registration is open for the 2025 spring season. We are looking to fill up to 3 teams; 10U, 12U and a 14U team. We will be capping each team to ensure we have enough players, but not too many that playing time is an issue. </p>
            <p>To register please fill out the Registration form, as well as the Medical form. If you need to rent gear from Storm, please fill out that form as well.</p>
            <ul>
              <li>Registration: <a href="https://forms.gle/uf7mfocgNuraoQJP6">Registration Form</a>
                </li>
                <li>
                Medical: <a href="https://forms.gle/gTaAvL9SwX6RNHpQ9">Medical Release Form</a>
                </li>
                <li>
                Gear rental: <a href="https://forms.gle/gTjwK8yaHomF6zq87">Gear Rental Form</a>
                </li>
            </ul>            
            <br />
            <h2>Cost</h2>
              <p>The cost for the spring season this year will be $350 per child. This includes winter training (January - March), outdoor practices (March-ish - May), and around 12 spring games.</p>
              <p>Each player is also required to hold a valid USA Lacrosse membership. Those can be obtained at the <a rel="noreferrer" target="_blank" href="https://www.usalacrosse.com/membership">USA Lacrosse</a> website for $35.</p>
              <br/>
              <img src="./assets/usa-lacrosse.png" alt="USA Lacrosse Logo" />
            <h2>Expectations</h2>
            <p>We hold our athletes to a high standard, while we understand all kids are at different levels, we will work together to ensure we are the best team possible.</p>
            <CTA>
            </CTA>
        </div>
      </div>
        )
    }
;
export default Registration;