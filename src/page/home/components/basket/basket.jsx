import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export const Basket = () => {
  return (
    <div >
      <nav>
        <ul className='p-2 ml-10'>
          <li><Link to="/basket/broom">Broom</Link></li>
          <li><Link to="/basket/machalka">Machalka</Link></li>
          <li><Link to="/basket/buckets">Buckets</Link></li>
        </ul>
      </nav>

      {/* Ichki sahifalar mana shu Outlet ichida ko'rinadi */}
      <div >
        <Outlet />
      </div>
    </div>
  );
};
