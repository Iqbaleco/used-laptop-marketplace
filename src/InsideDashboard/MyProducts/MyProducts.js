import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const MyProducts = () => {
    const { user, loading } = useContext(AuthContext);
    const result = useLoaderData();
    console.log(result);
    return (
        <div>
            <h2>{result.email}</h2>
        </div>
    );
};

export default MyProducts;