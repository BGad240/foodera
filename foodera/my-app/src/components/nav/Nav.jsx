import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
    return (
        <>
            <nav className='flex-1 flex justify-end'>
                <ul className='flex gap-5 text-red-900 font-semibold items-center'>
                    <li>
                        <Link to='/' className=' outline-none'>Home</Link>
                    </li>
                    
                    <li>
                    <Link to="/about"  className=' outline-none'>About Us</Link>
                    </li>

                    <li>
                    <Link to='/explore'  className=' outline-none'>Explore Foods</Link>
                    </li>

                    <li>
                    <Link to='reviews'  className=' outline-none'>Reviews</Link>
                    </li>

                    <li>
                    <Link to='faq'  className=' outline-none'>Faq</Link>
                    </li>
                    <button className='transtion duration-300 bg-red-900 text-white px-5 py-2 rounded-md hover:bg-white hover:text-red-900 border-4 border-red-900'>01090201569</button>
                </ul>
            </nav>
        </>
    )
}

export default Nav