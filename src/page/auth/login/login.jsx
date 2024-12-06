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
      setError("email", { type: "manual", message: "Kirish uchun parol: 1234 email: admin@gmail.com" });
      setError("password", { type: "manual", message: "Yaroqsiz elektron pochta yoki parol" });
    }
  };

  return (
    <div className='w-[100%]   md:h-auto lg:flex lg:items-center lg:justify-center  '>
      <div className=' w-[100%] py-10 flex flex-col items-center gap-10 md:flex   lg:flex-row lg:flex lg:items-center lg:justify-between  lg:max-w-[1300px] lg:w-[100%] lg:mt-20 bg-white'>
        <div className='bg-[url("https://www.meridean.org/frontend/images/web-student-login-img.png")] bg-no-repeat bg-cover w-[340px] h-[210px] md:order-2 md:w-[750px] md:h-[500px] order-2 lg:order-1  lg:w-[800px] lg:h-[500px]'>
        </div>
        <div className='flex flex-col items-center px-10 w-[330px] h-[400px] md:order-1 md:w-[600px] md:h-[400px] order-1 lg:order-2 lg:w-[400px] lg:h-[350px] border-blue-600 border rounded-xl shadow-lg shadow-blue-300 lg:hover:shadow-md'>
          <h1 className='text-3xl text-blue-500 font-medium mt-3'>Login</h1>
          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col  mt-10'>
            <Input {...register('email')} type='email' placeholder="Email" className=" w-[250px] md:w-[400px]   lg:w-[300px]   h-[45px] border-blue-400 outline-none" />
            
            <Input {...register('password')} type='password' placeholder="Password" className=" w-[250px] md:w-[400px]  lg:w-[300px] mt-5 h-[45px] border-blue-400 outline-none" />
            {errors.password && <p className="text-red-500 font-medium text-sm transition-all duration-1000 mt-1">{errors.password.message}</p>}
            <Button type='submit' className="py-2 w-[250px] md:w-[400px]  lg:w-[300px] h-[45px] mt-5 rounded-lg">Send</Button>
            {errors.email && <p className="text-red-500 font-medium text-sm transition-all duration-1000 mt-1">{errors.email.message}</p>}
          </form>
          <Link className='font-bold text-red-500 mt-5' to={"/register"}>Register</Link>
        </div>
      </div>
    </div>
  );
};
