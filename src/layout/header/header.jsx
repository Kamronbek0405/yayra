import React, { useState, useEffect } from 'react';
import Logo from '../../../public/logo.png';
import { Link } from 'react-router-dom';
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectSeparator
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ExitIcon } from '@/icon/exit-icon';
import { MenuIcon } from '@/icon/menu-icon';

export const Header = () => {
  const navigate = useNavigate();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control menu visibility

  // Function to handle window resize
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const logo = () => {
    navigate('/login');
  };

  const register = () => {
    navigate('/register');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
  };

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling
    }
  };

  return (
    <div className='w-[100%] py-5 bg-[url("/blur.png")] bg-no-repeat bg-cover flex items-center justify-between px-4'>
      <Link className='md:' to={'/'}>
        <img src={Logo} alt='logoImg' />
      </Link>

      {/* Menu Toggle Button (Menu or X Icon for Mobile) */}
      {windowWidth <= 600 && (
        <Button onClick={toggleMenu} className="text-black text-2xl  outline-none shadow-none bg-transparent hover:bg-transparent">
          {isMenuOpen ? <ExitIcon /> : <MenuIcon />} {/* X icon when menu is open */}
        </Button>
      )}

    
      {isMenuOpen && windowWidth <= 800 && (
        <div className="absolute flex flex-col items-center justify-start top-24 left-0 w-[100%] h-[400px] bg-white z-10 p-5">
         
          <nav>
            <ul className='flex flex-col items-center  gap-6 text-xl font-medium '>
              <li>
                <a className='mr-5' onClick={() => scrollToSection('#business')}>
                  Business
                </a>
              </li>
              <li>
                <a className='mr-5' onClick={() => scrollToSection('#blog')}>
                  Blog
                </a>
              </li>
              <li>
                <a className='mr-5' onClick={() => scrollToSection('#pricing')}>
                  Pricing
                </a>
              </li>
              <li>
                <div className=''>
                  <Select>
                    <SelectTrigger className={'text-lg font-medium'}>Product</SelectTrigger>
                    <SelectContent className={"font-medium"}>
                      <SelectItem className={"font-medium"} value='option1'>Option 1</SelectItem>
                      <SelectItem value='option2'>Option 2</SelectItem>
                      <SelectSeparator />
                      <SelectItem value='option3'>Option 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      )}

    
      {windowWidth > 500 && (
        <div className=' md:flex md:items-center lg:flex lg:items-center lg:gap-10  '>
        
          <nav>
            <ul className='flex  items-start md:text-sm md:mr-14  lg:text-lg lg:gap-5 lg:mr-40 font-medium '>
              <li>
                <div className=' md:w-[80px]  lg:w-[110px] text-2xl'>
                  <Select className={"border-none  p-0"}>
                    <SelectTrigger className={'lg:text-md'}>Product</SelectTrigger>
                    <SelectContent>
                      <SelectItem value='option1'>Option 1</SelectItem>
                      <SelectItem value='option2'>Option 2</SelectItem>
                      <SelectSeparator />
                      <SelectItem value='option3'>Option 3</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </li>
              <li>
                <a className='mr-5' onClick={() => scrollToSection('#business')}>
                  Business
                </a>
              </li>
              <li>
                <a className='mr-5' onClick={() => scrollToSection('#blog')}>
                  Blog
                </a>
              </li>
              <li>
                <a className='mr-5' onClick={() => scrollToSection('#pricing')}>
                  Pricing
                </a>
              </li>
            </ul>
          </nav>
          <Button
            onClick={register}
            className={
              'bg-transparent md:px-7 md:mr-2 text-black hover:text-white lg:w-[137px] lg:h-[52px] rounded-xl'
            }>
            Sign In
          </Button>
          <Button
            onClick={logo}
            className={
              'hover:bg-transparent md:px-8  hover:text-black lg:w-[137px] lg:h-[52px] rounded-xl'
            }>
            Login
          </Button>
        </div>
      )}
    </div>
  );
};
