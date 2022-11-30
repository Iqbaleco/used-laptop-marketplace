import React from 'react';

const BrandCard = ({ brand }) => {
    return (
        <div>
            <p>
                <div class="flex w-full">
                    <div class="relative flex flex-col items-start m-1 transition duration-300 ease-in-out delay-150 transform bg-white shadow-2xl rounded-xl md:w-80 md:-ml-16 md:hover:-translate-x-16 md:hover:-translate-y-8 p-12">
                        <img class="object-cover object-center w-full rounded-t-xl lg:h-48 md:h-36" src={brand.link} alt="img" />
                        <div class="px-6 py-8">
                            <h4 class="mt-4 text-2xl font-semibold text-neutral-600">
                                <span class="">{brand.brand}</span>
                            </h4>

                        </div>
                    </div>
                </div>
            </p>
        </div>
    );
};

export default BrandCard;