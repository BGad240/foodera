import React from 'react'
import food2 from '../../assets/imgs/food2.png'
import Food3 from '../../assets/imgs/2.png'
import image2 from '../../assets/imgs/image.png'
import { MdDoneOutline } from "react-icons/md";
import { IoPlay } from "react-icons/io5";

const About = () => {
    return (
        <div>
            <div className="flex px-16 py-9 justify-around absolute -bottom-44 w-full bg-red-900 mb-20">
                <div className='text-center text-white'>
                    <h2 className='text-5xl font-bold  mb-3'>1287</h2>
                    <p className='font-semibold'>Savings</p>
                </div>
                <div className='text-center text-white'>
                    <h2 className='text-5xl font-bold  mb-3'>5673</h2>
                    <p className='font-semibold'>Photos</p>
                </div>
                <div className='text-center text-white'>
                    <h2 className='text-5xl font-bold  mb-3'>1287</h2>
                    <p className='font-semibold'>Rockets</p>
                </div>
                <div className='text-center text-white'>
                    <h2 className='text-5xl font-bold  mb-3'>1287</h2>
                    <p className='font-semibold'>Globes</p>
                </div>
            </div>
            <div className='container mx-auto px-20'>
                <div className='grid grid-cols-2  gap-20 mb-32'>
                    <div>
                        <img src={food2} alt="" className='rounded-xl' />
                    </div>
                    <div>
                        <h2 className='text-4xl font-semibold text-red-950 leading-normal mb-7'>We pride ourselves on making real food from the best ingredients.</h2>
                        <p className='text-lg text-[#555] pb-5'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.
                        </p>
                        <button className='px-7 py-2 bg-red-900 font-semibold text-white border-4 border-transparent hover:text-red-900 hover:border-red-900 hover:bg-white trasition duration-300'>
                            Learn More
                        </button>
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-2'>
                    <div className='my-4'>
                        <h2 className='text-4xl font-semibold text-red-950 leading-normal mb-7'>We make everything by hand with the best possible ingredients.</h2>
                        <p className='mr-4 text-lg text-[#555] pb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts</p>
                        <ul className='ml-6'>
                            <li className='flex items-center gap-3 text-lg text-[#555] pb-5'>
                                <MdDoneOutline className='text-red-900 text-2xl' />
                                Etiam sed dolor ac diam volutpat.
                            </li>
                            <li className='flex items-center text-lg text-[#555] pb-5 gap-3'>
                                <MdDoneOutline className='text-red-900 text-2xl' />
                                Erat volutpat aliquet imperdiet.
                            </li>
                            <li className='flex items-center text-lg text-[#555] pb-5 gap-3'>
                                <MdDoneOutline className='text-red-900 text-2xl' />
                                purus a odio finibus bibendum.
                            </li>
                        </ul>
                        <button className='mt-8 px-7 py-2 bg-red-900 font-semibold text-white border-4 border-transparent hover:text-red-900 hover:border-red-900 hover:bg-white trasition duration-300'>
                            Learn More
                        </button>
                    </div>
                    <div>
                        <img src={Food3} alt="" />
                    </div>
                </div>
            </div>
            <div className='relative'>
                <div className="bg-hero-pattern py-44 bg-cover bg-no-repeat bg-right-top w-full my-20">
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative z-10 text-center w-[70%]  mx-auto">
                        <h2 className='text-4xl text-white my-5 font-semibold'>When a man's stomach is full it makes no
                            difference whether he is rich or poor.</h2>
                        <p className='text-red mx-44 font-semibold text-yellow-600 text-lg mb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio
                            finibus bibendum in sit amet leo. Mauris feugiat erat tellus.
                        </p>
                        <div className='w-fit mx-auto'>
                            <a href="#" className=' flex items-center gap-2 text-white hover:text-[#7c0f28] transition duration-300'><IoPlay/> Watch Our Story</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

/**[#7c0f28] */