import React from 'react'
import im1 from '../../assets/imgs/ex1.jpg'
import im2 from '../../assets/imgs/ex2.jpg'
import im3 from '../../assets/imgs/ex3.jpg'

const ExFoods = () => {
    return (
        <div className='container mx-auto'>
            <div className='text-center'>
                <h1 className='text-5xl font-semibold text-[#7c0f28] mb-10'>Explore Our Foods</h1>
                <p className='text-[#555] text-xl mx-20 leading-normal mb-20'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.
                </p>
            </div>
            <div className='grid grid-cols-3 gap-20'>
                <div className="">
                    <div className="">
                        <img src={im1} alt="" className='rounded-lg mb-5' />
                    </div>
                    <div className="">
                        <p className='text-2xl font-semibold text-[#7c0f28]'>Rainbow Vegetable Sandwich</p>
                        <p className='text-lg text-[#555] my-3 ml-3'>Time: 15 - 20 Minutes | Serves: 1</p>
                    </div>
                    <div className="my-5">
                        <span className='text-[#7c0f28] font-semibold text-3xl mx-3'>$10.50</span>
                        <span className='text-[#555] font-semibold text-3xl line-through'>$11.70</span>
                    </div>
                    <div className='before:content-[*] w-full p-0 h-[1px] bg-slate-300'>
                        <button 
                        className='
                        my-7 py-2 px-7 bg-[#7c0f28] 
                        text-white font-semibold text-lg 
                        border-4 border-transparent 
                        hover:bg-white hover:text-[#7c0f28] hover:border-[#7c0f28]
                        transition duration-300
                        '>
                            Order Now
                        </button>
                    </div>
                </div>
                <div className="">
                    <div className="">
                        <img src={im2} alt="" className='rounded-lg mb-5' />
                    </div>
                    <div className="">
                        <p className='text-2xl font-semibold text-[#7c0f28]'>Vegetarian Burger</p>
                        <p className='text-lg text-[#555] my-3 ml-3'>Time: 30 - 45 Minutes | Serves: 1</p>
                    </div>
                    <div className="my-5">
                        <span className='text-[#7c0f28] font-semibold text-3xl mx-3'>$9.20</span>
                        <span className='text-[#555] font-semibold text-3xl line-through'>$10.50</span>
                    </div>
                    <div className='before:content-[*] w-full p-0 h-[1px] bg-slate-300'>
                        <button 
                        className='
                        my-7 py-2 px-7 bg-[#7c0f28] 
                        text-white font-semibold text-lg 
                        border-4 border-transparent 
                        hover:bg-white hover:text-[#7c0f28] hover:border-[#7c0f28]
                        transition duration-300
                        '>
                            Order Now
                        </button>
                    </div>
                </div>
                <div className="">
                    <div className="">
                        <img src={im1} alt="" className='rounded-lg mb-5' />
                    </div>
                    <div className="">
                        <p className='text-2xl font-semibold text-[#7c0f28]'>Raspberry Stuffed French Toast</p>
                        <p className='text-lg text-[#555] my-3 ml-3'>Time: 10 - 15 Minutes | Serves: 1</p>
                    </div>
                    <div className="my-5">
                        <span className='text-[#7c0f28] font-semibold text-3xl mx-3'>$12.50</span>
                        <span className='text-[#555] font-semibold text-3xl line-through'>$13.20</span>
                    </div>
                    <div className='before:content-[*] w-full p-0 h-[1px] bg-slate-300'>
                        <button 
                        className='
                        my-7 py-2 px-7 bg-[#7c0f28] 
                        text-white font-semibold text-lg 
                        border-4 border-transparent 
                        hover:bg-white hover:text-[#7c0f28] hover:border-[#7c0f28]
                        transition duration-300
                        '>
                            Order Now
                        </button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default ExFoods