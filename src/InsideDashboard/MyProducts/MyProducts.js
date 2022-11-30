import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Spinner from '../../Shared/Spinner/Spinner';

const MyProducts = () => {
    const { loading } = useContext(AuthContext);
    const result = useLoaderData();

    if (loading) {
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
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            result?.map((singleProduct, i) => <tr key={singleProduct._id}>
                                <th>{i + 1}</th>
                                <td>{singleProduct.name}</td>
                                <td>{singleProduct.resale_price}</td>
                                <td><button className="btn btn-sm btn-secondary">Available</button></td>
                                <td><button className="btn btn-sm btn-secondary">Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default MyProducts;