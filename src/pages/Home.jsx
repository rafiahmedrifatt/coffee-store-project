import React from 'react';
import GetCoffee from '../components/GetCoffee';
import { useLoaderData } from 'react-router';
import Navbar from '../components/navbar/Navbar';
import Banner from '../components/banner/Banner';
import BannerItems from '../components/bannerItems/BannerItems';

const Home = () => {
    const coffee = useLoaderData()
    console.log(coffee);
    return (
        <div>
            <Navbar />
            <Banner />
            <BannerItems />
            {coffee.map(singleCoffee => <GetCoffee singleCoffee={singleCoffee} />)}
        </div>
    );
};

export default Home;