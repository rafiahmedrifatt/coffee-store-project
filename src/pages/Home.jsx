import React from 'react';
import { useLoaderData } from 'react-router';
import Navbar from '../components/navbar/Navbar';
import Banner from '../components/banner/Banner';
import BannerItems from '../components/bannerItems/BannerItems';
import Coffee from '../components/Coffee/Coffee';

const Home = () => {
    const coffee = useLoaderData()
    return (
        <div>
            <Navbar />
            <Banner />
            <BannerItems />
            <Coffee coffee={coffee} />
        </div>
    );
};

export default Home;