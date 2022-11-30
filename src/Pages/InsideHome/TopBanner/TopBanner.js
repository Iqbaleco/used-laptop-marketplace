import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import banner from './used-laptop.jpg'

const TopBanner = () => {
    const [brands, setBrands] = useState([]);
    useEffect(() => {
        fetch('https://usedlapi-server-side.vercel.app/brand')
            .then(res => res.json())
            .then(data => setBrands(data))


    }, [])


    return (
        <div>
            <section class="text-gray-600 body-font">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Welcome to the world
                            <br class="hidden lg:inline-block" />high quality used laptop
                        </h1>
                        <p class="mb-8 leading-relaxed">Here you will get all kind of high configured brand laptop with lowest cost</p>
                        <div class="flex justify-center">
                            <Link to={`laptopcollection/${brands[0]?.brand}`}><button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg m-2">{brands[0]?.brand}</button></Link>
                            <Link to={`laptopcollection/${brands[1]?.brand}`}><button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg m-2">{brands[1]?.brand}</button></Link>
                            <Link to={`laptopcollection/${brands[2]?.brand}`}><button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg m-2">{brands[2]?.brand}</button></Link>

                        </div>
                    </div>
                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img class="object-cover object-center rounded" alt="hero" src={banner} />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TopBanner;