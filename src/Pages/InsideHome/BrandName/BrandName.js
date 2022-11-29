import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BrandName = () => {
    const [brands, setBrands] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/brand')
            .then(res => res.json())
            .then(data => setBrands(data))


    }, [])
    return (
        <div>
            <h3>All categories</h3>
            {
                brands?.map(brand => <Link to={`laptopcollection/${brand.brand}`}><button key={brand._id} className="btn btn-secondary">{brand.brand}</button></Link>)

            }
        </div>
    );
};

export default BrandName;