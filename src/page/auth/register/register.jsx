import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { auth } from '@/data/auth';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
  const { handleSubmit, register } = useForm();
  const navigate = useNavigate()

  const onSubmit = (data) => {

    const user = auth.find((u) => u.email === data.email && u.password === data.password);

    if (user) {
      console.log("Authentication successful");
      console.log("User name:", user.name);
      console.log("User id:", user.id);
    } else {
      console.log("Invalid credentials");
    }
    navigate("/login")

  };

  return (
    <div className='w-[100%] h-[100vh]  flex items-center   justify-center bg-gradient-to-r from-cyan-400 to-blue-400  '>
      <div className=' flex flex-col  items-center md:flex md:flex-row  gap-5 lg:flex-row lg:flex lg:items-center  lg:justify-around lg:max-w-[1200px]    rounded-xl bg-white lg:py-5  lg:w-[100%]  '>
        <div className='  bg-[url("https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7965.jpg")] bg-no-repeat bg-cover rounded-xl w-[320px] h-[210px] lg:w-[550px] lg:h-[550px]'>

        </div>
        <div className=' w-[350px] lg:w-[400px] lg:border-blue-400 border lg:h-[450px] gap-5 flex py-5 flex-col items-center bg-white   shadow-lg shadow-blue-400  lg:hover:shadow-md  rounded-2xl'>
          <h1 className='text-3xl text-blue-500 font-medium'>Register</h1>
          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5 mt-10 '>
          <Input {...register('name')} type='text' className=" w-[260px]   lg:w-[300px] h-[45px] border-blue-400 outline-none" placeholder="name" required />
            <Input {...register('email')} type='email' className={" w-[260px] lg:w-[300px] h-[45px] border-blue-400 outline-none"} placeholder="Email"  required  />
            <Input {...register('password')} type='password' className={" w-[260px] lg:w-[300px] h-[45px] border-blue-400 outline-none"} placeholder="Password"  required  />
            <Button type='submit' className={" py-2 w-[260px] lg:w-[300px] h-[45px] rounded-lg "} >Send</Button>
          </form>
          <Link className='font-bold text-red-500 ' to={"/login"} >Login</Link>
        </div>
      </div>
    </div>
  );
};
