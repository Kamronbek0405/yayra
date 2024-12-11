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
    if (location.pathname === '/' || location.pathname === '/') {
      navigate(`/pricing/${pricingData[0].id}`, { replace: true });
    }
  }, [location, navigate]);

  return (
    <div id='product'>
     
      {location.pathname === '/' && (
        <div className="products-list">
          <h2 className="text-xl font-semibold text-center mb-5">Mahsulotlar</h2>
          <ul className="flex flex-wrap justify-center gap-5">
            {pricingData.map((item) => (
              <li key={item.id} className="product-item">
                <Link
                  to={`/pricing/${item.id}`}
                  className="block text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-40 h-40 object-cover rounded-md mb-3 mx-auto"
                  />
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.price}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

    
      <nav>
        <ul className='p-2 overflow-hidden flex flex-col items-center gap-5 bg-slate-100 md:flex md:flex-row md:items-center md:justify-center lg:flex lg:items-center lg:flex-row lg:justify-center lg:py-5'>
          {pricingData.map((item, index) => (
            <li key={item.id}>
              <Link
                to={`/pricing/${item.id}`}
                className={`px-10 py-2 lg:py-2 lg:px-32 md:px-16 md:py-2 font-medium ${
                  location.pathname === `/pricing/${item.id}` ||
                  (index === 0 && location.pathname === '/')
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
