import React from 'react'
import { FaCircle } from "react-icons/fa";
import per1 from '../../assets/imgs/per1.jpg'


// slider but I need to learn how it's work -static-


const Rev = () => {
    return (
        <>
            <div className='flex items-center flex-col py-24 my-60 bg-[#7c0f28]'>
                <div className='w-[70%] bg-white rounded-xl flex items-center flex-col justify-center pb-10'>
                    <div>
                        <div className='w-fit mx-auto'>
                            <img src={per1} alt="" className='w-[80px] rounded-full my-10' />
                        </div>
                        <div className=' w-[70%] mx-auto text-center'>
                            <p className='mb-10 text-xl text-[#555]'>
                                "Food is not just fuel; it's an experience. The flavors,
                                textures, and aromas have the power to transport you to distant lands and
                                evoke memories long forgotten. A meal shared is a bond created,
                                and in every dish, there’s a story waiting to be told."
                            </p>

                            <p className='text-[#7c0f28] font-semibold text-xl'>Simab Dave- Web Designer</p>
                        </div>
                    </div>
                </div>
                <div className='flex pt-10 gap-2 text-white opacity-70'>
                        <FaCircle />
                        <FaCircle />
                        <FaCircle />
                    </div>
            </div>
        </>
    )
}

export default Rev