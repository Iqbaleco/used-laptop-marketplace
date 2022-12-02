import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Spinner from '../../Shared/Spinner/Spinner';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    // const result = useLoaderData();

    const { data: myproducts, isLoading, refetch } = useQuery({
        queryKey: ['myproducts'],
        queryFn: async () => {
            try {
                const res = await fetch(`https://usedlapi-server-side.vercel.app/dashboard/myproducts/${user?.email}`, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    });

    const handleDeleteMyProduct = singleProduct => {
        fetch(`https://usedlapi-server-side.vercel.app/laptopcollection/${singleProduct.name}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`${singleProduct.name} deleted successfully`)
                }
            })
    }

    const handleAdvertise = singleProduct => {
        fetch(`https://usedlapi-server-side.vercel.app/laptopcollection/${singleProduct.name}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                refetch();
                toast.success(`${singleProduct.name} added successfully for advertise`)

            })
    }

    if (isLoading) {
        return <Spinner></Spinner>
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Promotion</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myproducts?.map((singleProduct, i) => <tr key={singleProduct._id}>
                                <th>{i + 1}</th>
                                <td>{singleProduct.name}</td>
                                <td>{singleProduct.resale_price}</td>
                                <td>Available</td>
                                <td><button className="btn btn-sm btn-secondary" onClick={() => handleAdvertise(singleProduct)}>Advertise</button></td>
                                <td><button className="btn btn-sm btn-secondary" onClick={() => handleDeleteMyProduct(singleProduct)}>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default MyProducts;