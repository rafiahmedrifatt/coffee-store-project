import React from 'react';
import CoffeeCard from '../coffeeCard/CoffeeCard';

const Coffee = ({ coffee }) => {
    return (
        <div>
            {coffee.map(singleCoffee => <CoffeeCard singleCoffee={singleCoffee} />)}
        </div>
    );
};

export default Coffee;