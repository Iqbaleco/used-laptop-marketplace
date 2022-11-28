import React from 'react';
import { Link } from 'react-router-dom';
import logo from './usedlapi-logo.png'

const Header = () => {
    return (
        <div>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <div className="flex w-36 text-gray-900 mb-4 md:mb-0">
                        <Link to='/'><img src={logo} alt="" /></Link>
                    </div>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link to='/blog'><button className="mr-5 hover:text-gray-900">Blog</button></Link>
                        <Link to='/dashboard'><button className="mr-5 hover:text-gray-900">Dashboard</button></Link>
                    </nav>
                    <Link to='/login'>
                        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Login
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </Link>
                </div>
            </header>
        </div>
    );
};

export default Header;