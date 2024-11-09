import React, { useEffect } from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu
} from './NavbarElements';
import './navbar.scss';

var hasFlipped = "False";

function openNav(){
	if (hasFlipped === "True") {
		document.getElementById("nav").style.display = "none";
		hasFlipped = "False";
	}
	else if(hasFlipped === "False"){
		document.getElementById("nav").style.display = "flex";
		hasFlipped = "True";
	}

}


function Navbar() {
  //const [desktop, setDesktop] = useState(false);


  useEffect(() => {
    //browser listener on media with criteria max-width
    //if matched , the const show=true otherwise it is set to false
    const media = window.matchMedia("(min-width: 767px)");
    media.addEventListener("change", () => {
      if (media.matches) {
        //setDesktop(true);
        document.getElementById("nav").style.display = "flex";
       }
       else {
        //setDesktop(false);
        document.getElementById("nav").style.display = "none";

       }
    });
  }, []);
  
  return (
    <>
    <div className='home-nav'>

      <Nav>
       
        <Bars id={"hamburger"} onClick={openNav} />
        
        <NavMenu id={"nav"}>
          <NavLink to='/' >
            Home
          </NavLink>
          <NavLink to='/registration' >
            Registration
          </NavLink>
          <NavLink to='/schedule' >
            Schedule
          </NavLink>
          <NavLink to='/equipment' >
            Equipment
          </NavLink>
          <NavLink to='/area-teams' >
            Area Teams
          </NavLink>          
        </NavMenu>
      </Nav>
      </div>
    </>
  );
}
  
export default Navbar;