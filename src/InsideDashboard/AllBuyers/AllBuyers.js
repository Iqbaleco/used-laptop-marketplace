import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllBuyers = () => {
    const allBuyers = useLoaderData();
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
                                <td><button className="btn btn-sm btn-secondary">Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;