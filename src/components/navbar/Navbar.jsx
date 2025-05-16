import React from 'react';
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <div className="flex justify-center items-center bg-[url(https://i.ibb.co/NdSZFWhG/15.jpg)] gap-5">
            <img src="https://i.ibb.co/dFt1G82/logo1.png" className='w-15' alt="" />
            <Link to={`/`} className='text-3xl font-semibold italic-font'>Espresso Emporium</Link>
        </div>
    );
};

export default Navbar;
