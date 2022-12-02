import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Spinner from '../../Shared/Spinner/Spinner';
// import { useLoaderData } from 'react-router-dom';

const AllBuyers = () => {
    // const allBuyers = useLoaderData();

    const { data: allBuyers, isLoading, refetch } = useQuery({
        queryKey: ['allbuyers'],
        queryFn: async () => {
            try {
                const res = await fetch('https://usedlapi-server-side.vercel.app/dashboard/allbuyers/Buyer', {
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

    const handleDeleteBuyer = singleBuyer => {
        fetch(`https://usedlapi-server-side.vercel.app/users/${singleBuyer.name}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`${singleBuyer.name} deleted successfully`)
                }
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
                            <th>Email</th>
                            <th>Role</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allBuyers?.map((singleBuyer, i) => <tr key={singleBuyer._id}>
                                <th>{i + 1}</th>
                                <td>{singleBuyer.name}</td>
                                <td>{singleBuyer.email}</td>
                                <td>{singleBuyer.role}</td>
                                <td><button className="btn btn-sm btn-secondary" onClick={() => handleDeleteBuyer(singleBuyer)}>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;