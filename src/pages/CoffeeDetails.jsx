import React from 'react';
import { useLoaderData } from 'react-router';

const CoffeeDetails = () => {
    const { category, details, name, photo, price, supplier, taste } = useLoaderData()

    return (
        <div>
            <div className='grid grid-cols-2 items-center h-[80vh] w-10/12 mx-auto bg-[#F4F3F0] text-black my-20'>

                <img src={photo} className='h-[80%] mx-auto' alt="" />

                <div className='normal-font flex flex-col gap-2'>
                    <h1 className='text-2xl mb-4 italic-font'>Niceties</h1>
                    <p><span className='font-semibold'>Name</span>: {name}</p>
                    <p><span className='font-semibold'>Price</span>: {price}</p>
                    <p><span className='font-semibold'>Supplier</span>: {supplier}</p>
                    <p><span className='font-semibold'>Taste</span>: {taste}</p>
                    <p><span className='font-semibold'>Category</span>: {category}</p>
                    <p><span className='font-semibold'>Details</span>: {details}</p>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;