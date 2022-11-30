import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllSellers = () => {
    const allSellers = useLoaderData();
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
                                <td><button className="btn btn-sm btn-secondary">Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;