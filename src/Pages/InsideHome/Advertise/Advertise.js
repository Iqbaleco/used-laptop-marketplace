import React from 'react';

const Advertise = ({ newAd }) => {
    const { name, img, description } = newAd;
    return (
        <div>
            <section>

                <div class="relative mx-auto max-w-7xl">
                    <div class="grid max-w-lg gap-5 mx-auto lg:grid-cols-3 lg:max-w-none">
                        <div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
                            <div class="flex-shrink-0">
                                <img class="p-8 w-full" src={img} alt="" />
                            </div>
                            <div class="flex flex-col justify-between flex-1 p-6 bg-white">
                                <div class="flex-1">
                                    <div class="block mt-2">
                                        <p class="text-xl font-semibold text-neutral-600">{name}</p>
                                    </div>
                                </div>
                                <div className='py-4'>
                                    {description}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section >
        </div >
    );
};

export default Advertise;