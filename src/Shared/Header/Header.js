import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import logo from './usedlapi-logo.png'

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();


    const handleLogOut = () => {
        logOut()
            .then(() => {
                localStorage.removeItem('accessToken');
                navigate('/');
            })

            .catch(err => console.log(err));
    }

    return (
        <div>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <div className="flex w-36 text-gray-900 mb-4 md:mb-0">
                        <Link to='/'><img src={logo} alt="" /></Link>
                    </div>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <button className="mr-5 hover:text-gray-900"><Link to='/blog'>Blog</Link></button>
                        {
                            user?.uid ? <>
                                <button className="mr-5 hover:text-gray-900"><Link to='/dashboard'>Dashboard</Link></button>
                                <button onClick={handleLogOut} className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Sign Out
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </button>
                            </>
                                :
                                <>
                                    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"><Link to='/login'>Login
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg></Link>
                                    </button>
                                </>
                        }
                    </nav>

                </div>
            </header>
        </div>
    );
};

export default Header;