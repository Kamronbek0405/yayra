import React from 'react';

export const ProductCard = ({ img, price, title, discription, description2,name  }) => {
  return (
    <div className="w-[300px] h-[400px] md:w-[350px] md:h-[450px] md:px-10 mt-5 shadow-lg shadow-gray-300 hover:shadow-md border-2 p-7 rounded-xl" data-aos="zoom-in">
      <img className='w-[200px] h-[200px] md:w-[250px] md:h-[250px]' src={img} alt={img} />
      <h1 className='md:text-2xl md:mt-5 font-medium'>{name}</h1>
      <h1 className=" md:mt-2">{title}</h1>
      <p className="md:mt-2 font-medium">{price }</p>
      <p>{description2}</p>
      <span className="product-description">{discription}</span> {/* Corrected 'discription' to 'description' */}
    </div>
  );
};
