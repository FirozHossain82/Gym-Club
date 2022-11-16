import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import React from 'react';

const Header = () => {
    return (
        <div>
            <h1>Welcome to my Gym House</h1>
            <FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon>
            <button className="btn btn-active btn-primary">Button</button>
        </div>
    );
};

export default Header;