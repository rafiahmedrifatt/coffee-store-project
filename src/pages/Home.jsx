import React from 'react';
import GetCoffee from '../components/GetCoffee';
import { useLoaderData } from 'react-router';

const Home = () => {
    const coffee = useLoaderData()
    console.log(coffee);
    return (
        <div>
            <h1>This is Home</h1>
            {coffee.map(singleCoffee => <GetCoffee singleCoffee={singleCoffee} />)}
        </div>
    );
};

export default Home;