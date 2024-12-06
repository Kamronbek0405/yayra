import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

export const Basket = () => {
  const location = useLocation(); // Hozirgi yo'nalishni olish
  
  return (
    <div>
      <nav>
        <ul className='p-2 ml-10'>
          <li>
            <Link
              to="/"
              className={`p-2 ${location.pathname === '/' ? 'bg-blue-500 text-white' : ''}`}
            >
              Broom
            </Link>
          </li>
          <li>
            <Link
              to="/machalka"
              className={`p-2 ${location.pathname === '/machalka' ? 'bg-blue-500 text-white' : ''}`}
            >
              Machalka
            </Link>
          </li>
          <li>
            <Link
              to="/buckets"
              className={`p-2 ${location.pathname === '/buckets' ? 'bg-blue-500 text-white' : ''}`}
            >
              Buckets
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
