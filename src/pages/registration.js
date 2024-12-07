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
            <p>To register please fill out the Registration form, as well as the Medical form.</p>
            <ul>
              <li>Registration: <a className='button' href="https://forms.gle/uf7mfocgNuraoQJP6">Registration Form</a>
                </li>
                <li>
                Medical: <a className='button' href="https://forms.gle/gTaAvL9SwX6RNHpQ9">Medical Release Form</a>
                </li>
            </ul>            
            <br />
            <h2>Cost</h2>
              <p>The cost for the spring season this year will be $350 per child. This includes winter training (January - March), outdoor practices (March-ish - May), and around 10 spring games.</p>
              <p>Each player is also required to hold a valid USA Lacrosse membership. Those can be obtained at the <a rel="noreferrer" target="_blank" href="https://www.usalacrosse.com/membership">USA Lacrosse</a> website for $35.</p>
              <br/>
              <img src="./assets/usa-lacrosse.png" alt="USA Lacrosse Logo" />

                          
            <h2>Team Birthdate Ranges</h2>
            <p>
            10U (birthdates 9/1/14 - 8/31/16)
            <br /><br />
            12U (birthdays 9/1/12 - 8/31/14)
            <br /><br />
            14U (birthdates 9/1/10 - 8/31/12)
            <br />[through 8th grade]
            </p>
            <h2>Expectations</h2>
            <h3>Parent Expectations</h3>
             <p>All club information is communicated through GameChanger, a smartphone app. Please stay informed of Club activities, games and practices by checking Gamechanger regularly. We recommend you sign up ALL the email addresses for members who need to get information (Athlete, Mom, Dad, Guardian).
              </p>
              <p>All parents/guardians are expected to volunteer at games. As a club sport we rely 100% on volunteers for all management functions on and off the field. Your help is vital to ensuring our athletes have the opportunity to participate in the Club.
              </p>
              <h3>Parent Behavior</h3>
              <p>Parents will remain in the team's spectator area (behind the fence on the outer perimeter of the track) during games.
              </p>
              <p>There is absolutely no coaching from the sidelines by parents at games. This confuses athletes and sometimes even undermines what a coach is trying to do.
              </p>
              <p>There is no criticizing of athletes (even if they are your own athlete), referees, or other adults. Poor sideline behavior sends the wrong message to others about our Club. It will not be tolerated. 
            </p>

            <CTA>
            </CTA>
        </div>
      </div>
        )
    }
;
export default Registration;