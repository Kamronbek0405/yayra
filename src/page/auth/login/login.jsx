import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '@/data/auth';

export const Login = () => {
  const { handleSubmit, register, setError, formState: { errors } } = useForm();
  const navigate = useNavigate();
  

  const onSubmit = (data) => {
    const user = auth.find(u => u.email === data.email && u.password === data.password);

    if (user) {
      console.log("Login successful");
      console.log("User name:", user.name);
      console.log("User id:", user.id);

      // Foydalanuvchini localStorage-ga saqlash
      localStorage.setItem('user', JSON.stringify(user));

      // 5 daqiqadan keyin localStorage-dan o'chirish
      setTimeout(() => {
        localStorage.removeItem('user');
        console.log("User data removed from localStorage after 5 minutes");
      }, 5 * 60 * 1000); // 5 daqiqa (millisekundlarda)

      navigate('/');
    } else {
      // Xato bo'lsa, xato xabarini chiqarish
      setError("email", { type: "manual", message: "Yaroqsiz elektron pochta yoki parol" });
      setError("password", { type: "manual", message: "Yaroqsiz elektron pochta yoki parol" });
    }
  };

  return (
    <div className='w-[100%] h-[100vh] flex items-center justify-center'>
      <div className='flex items-center justify-between max-w-[1300px] w-[100%] bg-white'>
        <div className='bg-[url("https://www.meridean.org/frontend/images/web-student-login-img.png")] bg-no-repeat bg-cover w-[800px] h-[500px]'>
        </div>
        <div className='flex flex-col items-center w-[400px] h-[350px] border-blue-600 border rounded-xl shadow-lg shadow-blue-300 hover:shadow-md'>
          <h1 className='text-3xl text-blue-500 font-medium mt-3'>Login</h1>
          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col  mt-10'>
            <Input {...register('email')} type='email' placeholder="Email" className="w-[300px]   h-[45px] border-blue-400 outline-none" />
            
            <Input {...register('password')} type='password' placeholder="Password" className="w-[300px] mt-5 h-[45px] border-blue-400 outline-none" />
            {errors.password && <p className="text-red-500 font-medium text-sm transition-all duration-1000 mt-1">{errors.password.message}</p>}
            <Button type='submit' className="py-2 w-[300px] h-[45px] mt-5 rounded-lg">Send</Button>
          </form>
          <Link className='font-bold text-red-500 mt-5' to={"/register"}>Register</Link>
        </div>
      </div>
    </div>
  );
};
