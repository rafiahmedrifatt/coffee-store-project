import React from 'react';

const Banner = () => {
    return (
        <div className='bg-[url(https://i.ibb.co/HfWpSgMD/3.png)] h-[90vh] bg-cover flex justify-end items-center'>
            <div className='text-left flex flex-col gap-3 mr-[10vw]'>
                <h1 className='text-5xl font-semibold italic-font'>Would you like a Cup of Delicious Coffee?</h1>
                <p className='normal-font text-sm'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of <br /> every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                <div>
                    <button className='btn bg-[#E3B577] italic-font text-black'>Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;