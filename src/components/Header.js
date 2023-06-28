import React, { useState, useEffect } from 'react';
import { header } from '../data';
import { Link } from 'react-scroll';

import Nav from '../components/Nav.js';
import NavMobile from '../components/NavMobile';

import { RiMenu4fill, RiCloseFill, RiMenu4Fill } from 'react-icons/ri';

const Header = () => {
  // header state
  const [isActive, setIsActive] = useState(false);

  // click
  const closeMenu = () => setIsActive(false);

  // nav mobile state
  const [navMobile, setNavMobile] = useState(false);

  // SCROLL EVENT
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 80 ? setIsActive(true) : setIsActive(false);
    });
  }, []);

  // Destructuring header data
  const { logo, btnHome, btnAbout, btnGallery, btnTestimonials, btnContactUs } = header;

  return (
    <header
      className={`${
        isActive ? 'bg-neutral-500 py-[2px]' : 'bg-transparent py-[26px]'
      } fixed max-w-[1440px] z-20 left-0 right-0 mx-auto
        flex justify-between items-center px-[20px] lg:px-[80px] transition-all duration-300`}
    >
      {/* logo */}
      <a href="">
        <img src={logo} alt="logo" className="h-[100px]" />
      </a>
      <Nav />
      {/* btns - initially hidden - show on desktop */}
      <div className="hidden lg:flex space-x-20">
      <button className='btn btn-sm text-white hover:text-primary-200 transition'>
        <Link to="home" spy={true} smooth={true} duration={500} onClick={closeMenu}>
          {btnHome}
        </Link>
        </button>
        <button className='btn btn-sm text-white hover:text-primary-200 transition'>
        <Link to="about" spy={true} smooth={true} duration={500} onClick={closeMenu}>
          {btnAbout}
       </Link>
       </button>
        <button className='btn btn-sm text-white hover:text-primary-200 transition'>
        <Link to="gymgallery" spy={true} smooth={true} duration={500} onClick={closeMenu}>
          {btnGallery}
        </Link>
        </button>
        <button className='btn btn-sm text-white hover:text-primary-200 transition'>  
        <Link to="testimonials" spy={true} smooth={true} duration={500} onClick={closeMenu}>
          {btnTestimonials}
        </Link>
        </button>
       <button className='btn btn-sm text-white hover:text-primary-200 transition'>
        <Link to="contactus" spy={true} smooth={true} duration={500} onClick={closeMenu}>
          {btnContactUs}
        </Link>
        </button>
      </div>
      {/* nav menu btn - hide on desktop */}
      <div onClick={() => setNavMobile(!navMobile)} className="lg:hidden absolute right-4">
        {navMobile ? (
          <RiCloseFill className="text-primary-200 text-3xl" />
        ) : (
          <RiMenu4Fill className="text-primary-200 text-3xl" />
        )}
      </div>
      {/* nav mobile - hide on desktop */}
      <NavMobile navMobile={navMobile} />
    </header>
  );
};
//nav bar menu for mobile ka code kidhar? pani puri lyt liyo code batao bhai :3🤣🤣
export default Header;
