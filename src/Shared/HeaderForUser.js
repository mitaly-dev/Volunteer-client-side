import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logos/Group 1329.png'

const HeaderForUser = () => {
    return (
        <div className='bg-transparent absolute z-40 left-4 top-0 py-3 text-center'>
            <div >
                <Link to="/" className='text-lg px-10 py-2 text-white border rounded-lg hover:bg-[#fff3]'>Back</Link>
            </div>
        </div>
    );
};

export default HeaderForUser;