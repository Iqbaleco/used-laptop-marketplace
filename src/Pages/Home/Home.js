import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Spinner from '../../Shared/Spinner/Spinner';
import Advertise from '../InsideHome/Advertise/Advertise';
import BrandName from '../InsideHome/BrandName/BrandName';
import TopBanner from '../InsideHome/TopBanner/TopBanner';
import Stats from './Stats/Stats';

const Home = () => {
    const { loading } = useContext(AuthContext);
    const [advertise, setAdvertise] = useState([]);
    useEffect(() => {
        fetch('https://usedlapi-server-side.vercel.app/laptopcollection')
            .then(res => res.json())
            .then(data => setAdvertise(data))


    }, []);

    const filteredAd = advertise?.filter(singleAd => singleAd.sale === true);

    if (loading) {
        return <Spinner></Spinner>
    }
    return (
        <div>
            <TopBanner></TopBanner>
            <BrandName></BrandName>
            {
                filteredAd &&
                <div>
                    <h2 className='text-center tracking-tight hover:tracking-wide font-bold text-2xl text-purple-600'>Advertise Your Product</h2>
                    <div class="relative px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
                        {
                            filteredAd?.map(newAd => <Advertise
                                key={newAd._id}
                                newAd={newAd}
                            ></Advertise>)
                        }
                    </div>
                </div>
            }
            <Stats></Stats>
        </div>
    );
};

export default Home;