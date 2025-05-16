import React from 'react';
import CoffeeCard from '../coffeeCard/CoffeeCard';

const Coffee = ({ coffee }) => {
    return (
        <>
            <p>--- Sip & Savor ---</p>
            <h2>Our Popular Products</h2>
            <button className='btn bg-[#E3B577]'>Add Coffee</button>
            <div className='w-10/12 mx-auto grid grid-cols-2 gap-10'>
                {coffee.map(singleCoffee => <CoffeeCard singleCoffee={singleCoffee} />)}
            </div>
        </>
    );
};

export default Coffee;