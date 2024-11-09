import React from 'react';
import Banner from '../components/banner';
import Navbar from '../components/navbar';

function Home() {
    return (
  
      <div className='App'>
        <header>
          <Banner></Banner>
        </header>
        <Navbar></Navbar>

        <div className='container'> 
            <h2>Who is Storm</h2>
            <p>The Fort Wayne Storm is a youth lacrosse program dedicated to fostering a love for the sport and developing the skills of young athletes in grades 3-8. Our team is committed to providing a positive and supportive environment where players can learn, grow, and have fun.
            </p>
            <p>
            As a travel team, we offer a competitive experience that extends beyond local boundaries. Our season typically starts in January with intense practice sessions, followed by exciting tournaments and league games throughout the spring. By participating in these events, our players gain valuable experience, improve their skills, and make lasting friendships with other lacrosse enthusiasts.
            </p>
            <p>
            The Storm is primarily run by dedicated volunteers who share a passion for the sport and a commitment to our players' success. Our volunteer coaches bring a wealth of knowledge and experience to the team, providing expert instruction and guidance.
            </p>
            <p>
            Whether you're a seasoned player or just starting out, the Fort Wayne Storm is the perfect place to take your lacrosse game to the next level. Join us and become part of a team that is dedicated to excellence, sportsmanship, and the joy of the game.</p>
            
            <h2>Spring 2025 Call Out Meeting</h2>
            <p>We are preparing for our spring 2025 season by having an informational session for players and parents on 12/5/24 at 6:30pm in the conference room on the second floor of Empowered Sports on Lima road.</p>
            <p><a href="https://forms.gle/S41xYkSGMo9fdbAF8">RSVP for the Call Out meeting</a></p>
        </div>
      </div>
        )
    }
;
export default Home;