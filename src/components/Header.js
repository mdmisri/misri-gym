import React, { useState, useEffect } from 'react';
import { header } from '../data';
import { Link } from 'react-scroll';
import Nav from '../components/Nav.js';
import NavMobile from '../components/NavMobile';
import { RiMenu4fill, RiCloseFill, RiMenu4Fill } from 'react-icons/ri';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const closeMenu = () => setIsActive(false);
  const [navMobile, setNavMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 80 ? setIsActive(true) : setIsActive(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const { logo, btnHome, btnAbout, btnGallery, btnTestimonials, btnContactUs } = header;

  return (
    <header className={`fixed z-30 w-full transition-all duration-300 ${isActive ? 'bg-neutral-500 py-4' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 lg:px-12 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/">
            <img src={logo} alt="logo" className="h-12 lg:h-24" />
          </a>
          <Nav />
        </div>
        <div className="hidden lg:flex space-x-8">
          <button className="btn btn-sm text-white hover:text-primary-200 transition">
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
        <div onClick={() => setNavMobile(!navMobile)} className="lg:hidden">
          {navMobile ? (
            <RiCloseFill className="text-primary-200 text-3xl" />
          ) : (
            <RiMenu4Fill className="text-primary-200 text-3xl" />
          )}
        </div>
      </div>
      <NavMobile navMobile={navMobile} />
    </header>
  );
};

export default Header;
