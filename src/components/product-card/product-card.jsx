import React, { useState } from 'react';
import { Button } from '../ui/button';
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux'; 
import { removeProduct } from '@/page/redux/products/product-reducer'; 

export const ProductCard = ({ id, img, price, title, description2, name }) => {
  const [isRemoved, setIsRemoved] = useState(false); // false bo'lishi kerak agar mahsulot yo'q bo'lsa
  const dispatch = useDispatch(); 

  const handleRemove = () => {
    dispatch(removeProduct(id)); 
    setIsRemoved(true); // Mahsulot sotib olingan deb belgilash
    toast.success("Mahsulot sotib olindi!");
  };

  const handleDelete = () => {
    dispatch(removeProduct(id)); 
    setIsRemoved(true); // Mahsulot o'chirilgan deb belgilash
    toast.error("Mahsulot o'chirildi!"); 
  };
  if(isRemoved) {
    <p className="mt-8 font-medium text-5xl">Hozirda mahsulotingiz yo'q!</p> 

  }
  return (
   <>
      <div className="w-[300px] h-[400px] md:w-[350px] md:h-[450px] md:px-10 mt-5 shadow-lg shadow-gray-300 hover:shadow-md border-2 p-7 rounded-xl lg:w-[400px] lg:h-[500px]" data-aos="zoom-in">
        <img className='w-[200px] h-[200px] md:w-[250px] md:h-[250px]' src={img} alt={img} />
        <h1 className='md:text-2xl md:mt-5 font-medium'>{name}</h1>
        <h1 className="md:mt-2">{title}</h1>
        <p className="md:mt-2 font-medium">{price}</p>
        <p>{description2}</p>

        <div className='flex items-center mt-4 gap-5'>
          <Button className={"px-12 py-5 hover:shadow-lg hover:shadow-blue-400"} onClick={handleRemove}>Buy</Button>
          <Button className={"px-10 py-5 bg-red-500 hover:bg-red-500 hover:shadow-lg hover:shadow-red-400"} onClick={handleDelete}>Delete</Button> 
        </div>
      </div>
   
   </>
  );
};
