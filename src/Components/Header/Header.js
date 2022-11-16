import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import React from 'react';

const Header = () => {
    return (
        <div className=''>
             <h1 className='pt-12 text-3xl font-bold text-lime-700'> <span><FontAwesomeIcon icon={faDumbbell} ></FontAwesomeIcon></span> Strength and Fitness Club</h1>
            <p className='text-lime-800 pt-2 text-lg'>Select  EveryDay exercise</p>
        </div>
    );
};

export default Header;