import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Spinner from '../../Shared/Spinner/Spinner';

const AllSellers = () => {
    // const allSellers = useLoaderData();

    const { data: allSellers, isLoading, refetch } = useQuery({
        queryKey: ['allbuyers'],
        queryFn: async () => {
            try {
                const res = await fetch('https://usedlapi-server-side.vercel.app/dashboard/allsellers/Seller', {
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

    const handleDeleteSeller = singleSeller => {
        fetch(`https://usedlapi-server-side.vercel.app/users/${singleSeller.name}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`${singleSeller.name} deleted successfully`)
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
                            allSellers?.map((singleSeller, i) => <tr key={singleSeller._id}>
                                <th>{i + 1}</th>
                                <td>{singleSeller.name}</td>
                                <td>{singleSeller.email}</td>
                                <td>{singleSeller.role}</td>
                                <td><button className="btn btn-sm btn-secondary"
                                    onClick={() => handleDeleteSeller(singleSeller)}
                                >Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;