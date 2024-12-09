import React from 'react'

export const ClientsCard = ({ topText, text, name, description, clientsIcon, clietsImg, clinetsBgImg }) => {
    return (
        <div className='w-[100%]  px-2 '>
           <div className='text-center'>
           <span className='  text-lg font-medium text-blue-500 text-center'>{topText.toUpperCase()}</span>
            <h1 className=' text-2xl md:text-3xl lg:text-4xl mt-3 font-medium'>{text}</h1>
           </div>
            <div className='bg-cover bg-no-repeat ml-3 md:ml-8  w-[350px] h-[150px] mt-10 md:w-[745px] md:h-[350px] lg:w-[1250px] lg:h-[580px] lg:mt-20 flex flex-col items-start justify-center relative '  data-aos="fade-left" style={{ backgroundImage: `url(${clinetsBgImg})` }}>
                <h1 className='text-white text-sm    left-14  top-12 md:text-3xl md:top-28 md:left-36 lg:text-6xl absolute  lg:left-[220px] lg:top-[210px] font-medium'>{name}</h1>
                <p className='text-gray-500 text-[10px] ml-14 w-[250px] mt-9 md:text-lg md:w-[500px] md:ml-36 lg:w-[500px] lg:ml-56 lg:text-lg lg:mt-10'>{description}</p>
                <img className='absolute lg:right-28 lg:top-28 w-[10px] h-[10px] right-10 top-8 md:w-[30px] md:h-[30px] md:top-16 md:right-16  lg:w-[62px] lg:h-[71px]' src={clientsIcon} alt="Icon" />
                <img className=' w-[50px] h-[50px] -left-2 md:w-[150px] md:h-[150px] md:-left-10 lg:w-[250px] lg:h-[250px] absolute lg:-left-20 '  data-aos="fade-right" src={clietsImg} alt="user-img" />
            </div>
        </div>
    )
}
