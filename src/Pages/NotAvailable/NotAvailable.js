import React from 'react';
import image from './NotAvailable.jpg';

const NotAvailable = () => {
    return (
        <section class="w-full">

            <div class="flex w-full mx-auto text-left">
                <div class="relative flex-col items-center mx-auto">
                    <div class="flex flex-col items-center justify-center py-24 mx-auto rounded-lg max-w-7xl">
                        <img class="object-cover object-center w-full rounded-xl" alt="hero" src={image} />
                    </div>
                </div>
            </div>

        </section>

    );
};

export default NotAvailable;