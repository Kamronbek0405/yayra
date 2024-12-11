import { Route, Routes } from 'react-router-dom';
import { MainLayout } from './layout/main-layout';

import { Login } from './page/auth/login';
import { Register } from './page/auth/register';

import { Broom } from './page/home/components/broom';
import { Machalka } from './page/home/components/machalka';
import { Buckets } from './page/home/components/buckets';
import { useEffect } from 'react';
import { loadState } from './config/storage';
import { useNavigate } from 'react-router-dom';
import { BasketDeteil } from './page/home/components/basket-deteil';
import { BasketSingle } from './page/home/components/basket-single';
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

function App() {
  const navigate = useNavigate()
  useEffect(() => {
    const user = loadState('user'); 
    
    if (!user || user.expireAt < Date.now()) {
      localStorage.removeItem('user');
      navigate('/login');  
    }
  }, [navigate]);
  
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<MainLayout />}>
          <Route path='broom' element={<Broom />} />
          <Route path='machalka' element={<Machalka />} />
          <Route path='buckets' element={<Buckets />} />
        <Route path="pricing/:id" element={<BasketDeteil/>} />
        

        </Route>
        <Route path='basket-single/:id' element={<BasketSingle/>} />
      </Routes>
    </>
  );
}

export default App;
