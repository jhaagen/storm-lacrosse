import React from 'react';
import Banner from '../components/banner';
import Navbar from '../components/navbar';
import { Helmet } from 'react-helmet-async';
import { SEO } from '../App';

function AreaTeams() {
    return (
      <div className='App'>
        <Helmet>
          <SEO 
            title="Area Teams"
            description="Explore high school lacrosse teams in the Fort Wayne area, including Homestead, Leo, Carroll, Snider, Bishop Dwenger, and more."
          />
        </Helmet>
        <header>
          <Banner></Banner>
        </header>
        <Navbar></Navbar>

        <div className='container'> 
            <h2>Area High School Club Teams</h2>
            <p>There are several area high school teams in the Fort Wayne area. Storm's goal is to ensure our players are prepared to be competitive in high school and beyond.</p>
            <h3><a href="https://homesteadlax.com/">Homestead High School</a></h3>
            <p></p>
            <h3><a href="https://www.leolionslacrosse.org/">Leo High School</a></h3>
            <p></p>
            <h3><a href="https://www.facebook.com/carrolllacrosseclub/">Carroll High School</a></h3>
            <p></p>
            <h3><a href="https://sniderathletics.com/teams/4395897/lacrosse/varsity">Snider High School</a></h3>
            <p></p>
            <h3><a href="https://athletics.bishopdwenger.com/lacrosse">Bishop Dwenger High School</a></h3>
            <p></p>
            <h3><a href="https://www.clhscadets.com/apps/pages/lacrosse">Concordia Lutheran High School</a></h3>
            <p></p>
           <h3><a href="https://trinethunder.com/sports/mens-lacrosse">Trine University</a></h3>
           <p></p>
            <h3><a href="https://indianatechwarriors.com/sports/mens-lacrosse">Indiana Tech</a></h3>
        </div>
      </div>
        )
    }
;
export default AreaTeams;