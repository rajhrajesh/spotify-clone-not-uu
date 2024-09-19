// Header.js
import React from 'react';
import { Search } from '@mui/icons-material';
import { Avatar } from '@mui/material';

import { useDataLayerValue } from '../../context';
import './index.css';

const Header = () => {
    const [{ user }] = useDataLayerValue();

    return (
        <div className="header">
            <div className="header__left">
                <Search />
                <input placeholder="Search for Artists, Songs, or Albums" type="text" />
            </div>
            <div className="header__right">
                <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    );
};

export default Header;
