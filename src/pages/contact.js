import React from 'react';
import Banner from '../components/banner';
import Navbar from '../components/navbar';

function Contact() {
    return (
      <div className='App'>
        <header>
          <Banner></Banner>
        </header>
        <Navbar></Navbar>

        <div className='container'> 
            <h2>Contact Us</h2>
            <p>Have questions about Fort Wayne Storm Lacrosse? We'd love to hear from you!</p>
            <p>Email: <a href="mailto:info@fortwaynestormlacrosse.com">info@fortwaynestormlacrosse.com</a></p>
            <p>Phone: (260) 555-0123</p>
            <p>Address: 1234 Lacrosse Lane, Fort Wayne, IN 46804</p>
            <p>Follow us on social media:</p>
            <ul>
                <li><a href="https://www.facebook.com/fortwaynestormlacrosse">Facebook</a></li>
                <li><a href="https://www.instagram.com/fortwaynestormlacrosse">Instagram</a></li>
                <li><a href="https://www.twitter.com/fortwaynestormlax">Twitter</a></li>
            </ul>
        </div>
      </div>
        )
    }
;
export default Contact;