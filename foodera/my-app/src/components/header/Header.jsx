import React from 'react'
import Nav from '../nav/Nav'
import logo from '../../assets/imgs/logo.png'
const Header = () => {
    return (
        <>
            <header className='flex justify-between items-center px-20 py-5 w-full'>
                <div>{/* for logo */}
                    <img src={logo} alt="hello" />
                </div>
                <Nav/>
            </header>
        </>
    )
}

export default Header