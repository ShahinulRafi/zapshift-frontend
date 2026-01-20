import React from 'react';
import logo from '../../../assets/logo.png'
const Logo = () => {
    return (
        <div className='flex justify-between items-center'>
            <div>
                <img src={logo} alt="" width="25"/>
            </div>
            <div>
                <h2 className='font-bold text-xl mt-2.5 -ml-3'>ZapShift</h2>
            </div>
        </div>
    );
};

export default Logo;