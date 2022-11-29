import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Modal from './Modal/Modal';
import SingleLaptop from './SingleLaptop/SingleLaptop';

const LaptopCollection = () => {
    const allLaptop = useLoaderData();
    const [bookingData, setBookingData] = useState(null);
    const { user } = useContext(AuthContext)

    return (
        <>
            <div>
                {
                    allLaptop?.map(singleLapi => <SingleLaptop
                        key={singleLapi._id}
                        singleLapi={singleLapi}
                        setBookingData={setBookingData}
                    ></SingleLaptop>)
                }
            </div>
            {
                bookingData &&
                <Modal
                    bookingData={bookingData}
                    setBookingData={setBookingData}
                ></Modal>
            }
        </>
    );
};

export default LaptopCollection;