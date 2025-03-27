import React from 'react';
import Banner from '../components/banner';
import Navbar from '../components/navbar';
import { Helmet } from 'react-helmet-async';
import { SEO } from '../App';

function Contact() {
    return (
      <div className='App'>
        <Helmet>
          <SEO 
            title="Contact"
            description="Get in touch with the Fort Wayne Storm lacrosse team. Contact our staff including Program Coordinator, Director of Coaching, and team coaches."
          />
        </Helmet>
        <header>
          <Banner></Banner>
        </header>
        <Navbar></Navbar>

        <div className='container contact'> 
          <div className='columns'>
            <div className='column'>
              <h2>Our Staff</h2>
              <h3>Kim Brown<br/>
                <span>Program Coordinator</span></h3>
              <h3>Dustin Tirpak<br/>
                <span>Director of Coaching</span></h3>
              <h3>Shane Gerber<br/>
                <span>14U Coach</span></h3>              
              <h3>Chris Giant<br/>
                <span>12U Coach</span></h3>
              <h3>Steven Bloom<br/>
                <span>14U Coach</span></h3>  
              <h3>Jared Haagen<br/>
                <span>Technology</span></h3>
            </div>
            <div className='column'>
              <h2>Contact Us</h2>
              <p><a href="mailto:fwstormlacrosse@outlook.com">Email us</a><br/>
              <a href='facebook'>Find us on Facebook</a></p>
            </div>
            </div>
        </div>
      </div>
        )
    }
;
export default Contact;