import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BrandCard from '../BrandCard/BrandCard';

const BrandName = () => {
    const [brands, setBrands] = useState([]);
    useEffect(() => {
        fetch('https://usedlapi-server-side.vercel.app/brand')
            .then(res => res.json())
            .then(data => setBrands(data))


    }, [])
    return (
        <div className='grid justify-items-center'>

            <div class="flex flex-wrap mx-auto md:flex-nowrap p-12">
                {
                    brands?.map(brand => <Link to={`laptopcollection/${brand.brand}`}><BrandCard
                        key={brand._id}
                        brand={brand}
                        className="btn btn-secondary"
                    ></BrandCard></Link>)

                }
            </div>
        </div>
    );
};

export default BrandName;