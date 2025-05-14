import React from 'react';
import { Outlet } from 'react-router';

const MainLayouts = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <Outlet />
        </div>
    );
};

export default MainLayouts;