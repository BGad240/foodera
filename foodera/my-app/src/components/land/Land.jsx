import React from 'react'
import food from '../../assets/imgs/food.png'
import { CiShoppingBasket } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
const Land = () => {
  return (
    <>
      <div className='container mb-40 mt-20 grid grid-cols-2 w-full px-20'>
        <div className='py-10 mb-40'>
          <h2 className="text-6xl mb-6 text-[rgb(168, 45, 73)]">Good food choices are good investments.</h2>
          <p className='text-[#5555] text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.</p>
          <div className='flex gap-5 mt-10'>
            <button className='px-3 py-2 bg-red-900 font-semibold text-white 
          flex items-center rounded border-4 border-red-900 hover:bg-white
           hover:text-red-900 transition duration-300'>
              Oreder Now
              <CiShoppingBasket className='text-2xl ml-2' /></button>
            <button
              className='px-3 py-2font-semibold text-black flex items-center rounded border-4 border-transparent
             hover:border-red-900 hover:bg-whitetransition duration-300 shadow-gray shadow-lg hover:text-red-900 font-semibold'>
              Learn More <IoIosArrowForward className='text-slate-500' /></button>
          </div>
        </div>
        <div className="container mx-auto grid grid-cols-2 ">
          <div>
            <img src={food} alt="" className='rounded-lg ml-44'/>
          </div>
          <div>
            <p></p>
            <button></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Land
