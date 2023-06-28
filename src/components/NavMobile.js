import React from 'react';
import { Link } from 'react-scroll';//oh already hai
import { nav } from '../data';
import { navmobile } from '../data';

//import { Link } from "react-router-dom"

const NavMobile = ({ navMobile }) => {
  const closeNav = () => {
    // Add code here to close the mobile navigation menu if needed
  };
//reeee ye click ku nahi horaaa woich toh
  return (
    <nav
      className={`${
        navMobile ? 'min-h-screen' : 'min-h-0'
      } lg:hidden w-full bg-neutral-500 fixed top-0 left-0 right-0 -bottom-12 -z-10 overflow-hidden transition-all h-0`}
    >
      <ul className="w-full h-full flex flex-col justify-center items-center gap-y-8">
        {navmobile.map((item, idx) => (
          <li key={idx}>
            <Link
              to={item.sectionId}
              smooth={true}
              duration={500}
              className="text-white text-body-md"
              activeClass="active"
              onClick={closeNav} // Close the mobile navigation menu on link click
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMobile;
//yo you noticed the scroll bar?? wherer?
//do one thing, send me the link to view to website on my mobile while i figure this error out for it i have to update the code on github