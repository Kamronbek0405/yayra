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

  return (
    <div className='w-[100%] py-5 bg-[url("/blur.png")] bg-no-repeat bg-cover flex items-center justify-between px-4'>
      <Link to={'/'}>
        <img src={Logo} alt='logoImg' />
      </Link>

      {/* Menu Toggle Button (Menu or X Icon for Mobile) */}
      {windowWidth <= 600 && (
        <Button onClick={toggleMenu} className="text-black text-2xl  outline-none shadow-none bg-transparent hover:bg-transparent">
          {isMenuOpen ? <ExitIcon /> : <MenuIcon />} {/* X icon when menu is open */}
        </Button>
      )}

      {/* Menu Links when Menu is Open (Mobile View) */}
      {isMenuOpen && windowWidth <= 999 && (
        <div className="absolute flex flex-col items-center justify-start top-24 left-0 w-[100%] h-[400px] bg-white z-10 p-5">
          <nav>
            <ul className='flex flex-col items-center  gap-6 text-xl font-medium '>
              <li>
                <Link className='mr-5' to={'/business'}>
                  Business
                </Link>
              </li>
              <li>
                <Link className='mr-5' to={'/blog'}>
                  Blog
                </Link>
              </li>
              <li>
                <Link className='mr-5' to={'/pricing'}>
                  Pricing
                </Link>
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

      {/* Links section, hidden at 300px for larger screens */}
     

      {/* Buttons section, shown only when width is more than 900px */}
      {windowWidth > 800 && (
        <div className='flex items-center gap-10'>
          <nav>
            <ul className='flex  items-start  '>
            <li>
                <div className='w-[110px] text-2xl'>
                  <Select>
                    <SelectTrigger className={'text-lg'}>Product</SelectTrigger>
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
                <Link className='mr-5' to={'/business'}>
                  Business
                </Link>
              </li>
              <li>
                <Link className='mr-5' to={'/blog'}>
                  Blog
                </Link>
              </li>
              <li>
                <Link className='mr-5' to={'/pricing'}>
                  Pricing
                </Link>
              </li>
              
            </ul>
          </nav>
          <Button
            onClick={register}
            className={
              'bg-transparent text-black hover:text-white w-[137px] h-[52px] rounded-xl'
            }>
            Sign In
          </Button>
          <Button
            onClick={logo}
            className={
              'hover:bg-transparent hover:text-black w-[137px] h-[52px] rounded-xl'
            }>
            Login
          </Button>
        </div>
      )}
    </div>
  );
};
