import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";


const Contact = () => {
    return (
        <>
            <div className='text-center my-24'>
                <div className='w-[60%] mx-auto'>
                    <h2 className='text-5xl text-[#7c0f28] font-semibold my-5 mb-10'>Hurry up! Subscribe our newsletter
                        and get 25% Off</h2>
                    <p className='text-2xl text-[#555] mb-10'>Limited time offer for this month. No credit card required.</p>
                </div>
                <div className=''>
                    <form action="" className='gap-10'>
                        <input type="email" name="email" placeholder="Enter your email"
                            className='w-[420px] pl-3 py-3 
                            border-4 border-slate-400 mb-20 mr-5
                            text-lg font-semibold
                            ' />
                        <button className='px-7 py-3 bg-[#7c0f28] font-semibold
                        text-white text-lg outline-none border-4 border-transparent 
                        hover:border-[#7c0f28] hover:text-[#7c0f28] hover:bg-white
                        transition duration-300'>
                            subscribe
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}


const Footer = () => {
  return (
    <>
    <div className='text-xl py-20 flex flex-col items-center text-white bg-[#7c0f28] gap-10'>
        <div className="flex gap-5">
            <a href="" className=' hover:underline '>Register</a>
            <a href="" className=' hover:underline '>Forum</a>
            <a href="" className=' hover:underline '>Affiliate</a>
            <a href="" className=' hover:underline '>FAQ</a>
        </div>
        <div className="flex gap-5 cursor-pointer">
            <FaFacebookF/>
            <FaTwitter/>
            <FaYoutube/>
            <FaInstagram/>
            <FaLinkedin/>
        </div>
        <div className="">
            © 2024. Foodera. All rights reserved.
        </div>
    </div>
    </>
  )
}


const Cooter = () => {
    return (
        <>
            <Contact />
            <Footer/>
        </>
    )
}

export default Cooter