import { Route, Routes } from 'react-router-dom';
import { MainLayout } from './layout/main-layout';
import { Home } from './page/home';
import { Busines } from './page/business';
import { Blog } from './page/blog';
import { Procing } from './page/pricing';
import { Login } from './page/auth/login';
import { Register } from './page/auth/register';
import { Basket } from './page/home/components/basket';
import { Broom } from './page/home/components/broom';
import { Machalka } from './page/home/components/machalka';
import { Buckets } from './page/home/components/buckets';
import { useEffect } from 'react';
import { loadState } from './config/storage';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate()
  useEffect(() => {
    const user = loadState('user'); // localStorage'dan foydalanuvchi ma'lumotlarini olish
    
    if (!user || user.expireAt < Date.now()) {
      // Agar foydalanuvchi yo'q bo'lsa yoki uning ma'lumotlari muddati o'tgan bo'lsa, uni o'chiramiz
      localStorage.removeItem('user');
      navigate('/login');  // Login sahifasiga yo'naltirish
    }
  }, [navigate]);
  return (
    <>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='business' element={<Busines />} />
          <Route path='blog' element={<Blog />} />
          <Route path='pricing' element={<Procing />} />

          {/* Home sahifasida nested routes */}
          <Route path='basket' element={<Basket />}>

          <Route path='broom' element={<Broom />} />
          <Route path='machalka' element={<Machalka />} />
          <Route path='buckets' element={<Buckets />} />
          </Route>

        </Route>
      </Routes>
    </>
  );
}

export default App;