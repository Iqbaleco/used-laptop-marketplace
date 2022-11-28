import React from 'react';

const Spinner = () => {
    return (
        <div className='grid place-items-center py-40'>
            <div className="relative">
                <div className="w-10 h-10 border-purple-200 border-2 rounded-full"></div>
                <div className="w-10 h-10 border-purple-700 border-t-2 animate-spin rounded-full absolute left-0 top-0"></div>
            </div>
        </div>
    );
};

export default Spinner;