import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useAdminCheck from '../../Pages/CustomHooks/useAdminCheck/useAdminCheck';
import useSellerCheck from '../../Pages/CustomHooks/useSellerCheck/useSellerCheck';
import Header from '../../Shared/Header/Header';

const Dashboard = () => {

    const { user } = useContext(AuthContext);
    const [adminCheck] = useAdminCheck(user?.email);
    const [sellerCheck] = useSellerCheck(user?.email);

    console.log(user);

    return (
        <div>
            <Header></Header>
            <div className="flex  overflow-hidden bg-white rounded-lg">
                <div className="hidden md:flex md:flex-shrink-0">
                    <div className="flex flex-col w-64">
                        <div className="flex flex-col flex-grow pt-5 overflow-y-auto bg-purple-500 border-r">
                            <div className="flex flex-col items-center flex-shrink-0 px-4">
                                <p className="px-8 text-left focus:outline-none">
                                    <h2 className="block p-2 text-xl font-medium tracking-tighter text-white transition duration-500 ease-in-out transform cursor-pointer hover:text-white">Dashboard</h2>
                                </p>
                                <button className="hidden rounded-lg focus:outline-none focus:shadow-outline">
                                    <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                                        <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                                    </svg>
                                </button>
                            </div>
                            <div className="flex flex-col flex-grow px-4 mt-5">
                                <nav className="flex-1 space-y-1 bg-purple-500">
                                    {
                                        adminCheck && <ul>
                                            <li>
                                                <Link to='/dashboard/allsellers'><p className="inline-flex items-center w-full px-4 py-2 mt-1 text-base text-white transition duration-500 ease-in-out transform border-purple-800 rounded-lg hover:border-purple-800 focus:shadow-outline hover:bg-purple-600" href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                                    </svg>
                                                    <span className="ml-4">All Sellers</span>
                                                </p></Link>
                                            </li>
                                            <li>
                                                <Link to='/dashboard/allbuyers'><p className="inline-flex items-center w-full px-4 py-2 mt-1 text-base text-white transition duration-500 ease-in-out transform border-purple-800 rounded-lg hover:border-purple-800 focus:shadow-outline hover:bg-purple-600" href="#">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                                    </svg>
                                                    <span className="ml-4">All Buyers</span>
                                                </p></Link>
                                            </li>
                                        </ul>
                                    }
                                    {
                                        sellerCheck && <ul>
                                            <li>
                                                <Link to='/dashboard/myproducts'><p className="inline-flex items-center w-full px-4 py-2 mt-1 text-base text-white transition duration-500 ease-in-out transform border-purple-800 rounded-lg hover:border-purple-800 focus:shadow-outline hover:bg-purple-600" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                                    </svg>
                                                    <span className="ml-4"> My Products</span>
                                                </p></Link>
                                            </li>
                                            <li>
                                                <Link to='/dashboard/addaproduct'><p className="inline-flex items-center w-full px-4 py-2 mt-1 text-base text-white transition duration-500 ease-in-out transform border-purple-800 rounded-lg hover:border-purple-800 focus:shadow-outline hover:bg-purple-600" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                                                    </svg>
                                                    <span className="ml-4"> Add A Product</span>
                                                </p></Link>
                                            </li>
                                        </ul>
                                    }
                                    <ul>
                                        {
                                            (!sellerCheck && !adminCheck) &&
                                            <li>
                                                <Link to='/dashboard'><p className="inline-flex items-center w-full px-4 py-2 mt-1 text-base text-white transition duration-500 ease-in-out transform border-purple-800 rounded-lg hover:border-purple-800 focus:shadow-outline hover:bg-purple-600" >
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                                                    </svg>
                                                    <span className="ml-4"> My Orders</span>
                                                </p></Link>
                                            </li>
                                        }
                                    </ul>
                                </nav>
                            </div>
                            <div className="flex flex-shrink-0 p-4 px-4 bg-purple-600">
                                <p href="#" className="flex-shrink-0 block w-full group">
                                    <div className="flex items-center">
                                        <div>
                                            <img className="inline-block rounded-full h-9 w-9" src="/assets/images/avatar.png" alt="" />
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-sm font-medium text-white">Wicked Labs</p>
                                        </div>
                                    </div>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col flex-1 w-0 overflow-hidden">
                    <main className="relative flex-1 overflow-y-auto focus:outline-none">
                        <div className="py-6">
                            <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
                                <h1 className="text-lg text-neutral-600">Use Title Here</h1>
                            </div>
                            <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
                                {/* Content here */}
                                <div className="py-4">
                                    <div className="rounded-lg bg-gray-50 h-96">
                                        <Outlet></Outlet>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;