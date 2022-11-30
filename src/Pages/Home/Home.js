import React from 'react';
import BrandName from '../InsideHome/BrandName/BrandName';
import TopBanner from '../InsideHome/TopBanner/TopBanner';
import Stats from './Stats/Stats';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <BrandName></BrandName>
            <Stats></Stats>
        </div>
    );
};

export default Home;