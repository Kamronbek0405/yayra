import React, { useEffect } from 'react'; 
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'; 
import { pricingData } from '@/data/data-service';

export const Basket = () => {   
  const location = useLocation();
  const navigate = useNavigate();

  // Sahifa yangilanganida yoki "/pricing" sahifasiga o'tilganda birinchi elementni tanlash
  useEffect(() => {
    if (location.pathname === '/pricing' || location.pathname === '/pricing/') {
      navigate(`/pricing/${pricingData[0].id}`, { replace: true });
    }
  }, [location, navigate]);
  

  return (
    <div>
      <nav>
        <ul className='p-2 flex flex-col gap-5 bg-slate-100 lg:flex lg:items-center lg:justify-center lg:py-5'>
          {pricingData.map((item, index) => (
            <li key={item.id}>
              <Link
                to={`/pricing/${item.id}`} 
                className={`py-2 px-32 font-medium ${location.pathname === `/pricing/${item.id}` || (index === 0 && location.pathname === '/pricing') ? 'bg-blue-500 text-white rounded-lg' : ''}`}
              >
                {item.name} 
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      <main>
        <Outlet />
      </main>
    </div>
  );
};
