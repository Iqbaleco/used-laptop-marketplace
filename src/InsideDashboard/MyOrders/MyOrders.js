import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Spinner from '../../Shared/Spinner/Spinner';

const MyOrders = () => {
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
                            <th>Email</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Pay</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            result?.map((singleOrder, i) => <tr key={singleOrder._id}>
                                <th>{i + 1}</th>
                                <td>{singleOrder.buyerEmail}</td>
                                <td>{singleOrder.itemName}</td>
                                <td><button className="btn btn-sm btn-secondary">{singleOrder.price}</button></td>
                                <td><button className="btn btn-sm btn-secondary">Pay</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
        // <div>
        //     <div className="overflow-x-auto w-full">
        //         <table className="table w-full">
        //             <thead>
        //                 <tr>
        //                     <th>
        //                     </th>
        //                     <th>Name</th>
        //                     <th>Price</th>
        //                     <th>Status</th>
        //                     <th>Delete</th>
        //                     <th></th>
        //                 </tr>
        //             </thead>
        //             {
        //                 result?.map(singleOrder => <OrdersTable
        //                     key={singleOrder._id}
        //                     singleOrder={singleOrder}
        //                 ></OrdersTable>)
        //             }
        //         </table>
        //     </div>

        // </div>
    );
};

export default MyOrders;