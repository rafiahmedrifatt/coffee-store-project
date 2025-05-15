import React from 'react';

const BannerItems = () => {
    return (
        <div className='bg-[#ECEAE3] text-[#1B1A1A]'>
            <div className='w-10/12 mx-auto grid grid-cols-4 gap-5 h-[300px] items-center'>
                <div className='flex flex-col gap-2'>
                    <img src="https://i.postimg.cc/NMxdnyQM/1.png" className='w-20' alt="" />
                    <h4 className='italic-font text-3xl'>Awesome Aroma</h4>
                    <p className='normal-font'>You will definitely be a fan of the design & aroma of your coffee</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <img src="https://i.postimg.cc/1tSWM0h2/2.png" className='w-20' alt="" />
                    <h4 className='italic-font text-3xl'>High Quality</h4>
                    <p className='normal-font'>We served the coffee to you maintaining the best quality</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <img src="https://i.postimg.cc/4xr2Hk8J/3.png" className='w-20' alt="" />
                    <h4 className='italic-font text-3xl'>Pure Grades</h4>
                    <p className='normal-font'>The coffee is made of the green coffee beans which you will love</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <img src="https://i.postimg.cc/8C63ZPFJ/4.png" className='w-20' alt="" />
                    <h4 className='italic-font text-3xl'>Proper Roasting</h4>
                    <p className='normal-font'>Your coffee is brewed by first roasting the green coffee beans</p>
                </div>
            </div>
        </div>
    );
};

export default BannerItems;