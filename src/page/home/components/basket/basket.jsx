import React, { useEffect } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { pricingData } from '@/data/data-service';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Basket = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-out-cubic', 
      once: false, 
    });
    AOS.refresh(); 
  }, [location.pathname]);

 
  useEffect(() => {
    if (location.pathname === '/pricing' || location.pathname === '/pricing/') {
      navigate(`/pricing/${pricingData[0].id}`, { replace: true });
    }
  }, [location, navigate]);

  return (
    <div>
      <nav>
        <ul className='p-2 overflow-hidden flex flex-col items-center gap-5 bg-slate-100 md:flex md:flex-row md:items-center md:justify-center lg:flex lg:items-center lg:flex-row lg:justify-center lg:py-5'>
          {pricingData.map((item, index) => (
            <li key={item.id}>
              <Link
                to={`/pricing/${item.id}`}
                className={`px-10 py-2 lg:py-2 lg:px-32 md:px-16 md:py-2 font-medium ${
                  location.pathname === `/pricing/${item.id}` ||
                  (index === 0 && location.pathname === '/pricing')
                    ? 'bg-blue-500 text-white rounded-lg'
                    : ''
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

    
      <main key={location.pathname} data-aos="fade-in" data-aos-duration="1500">
        <Outlet />
      </main>
    </div>
  );
};
