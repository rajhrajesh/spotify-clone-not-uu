// Sidebar.js
import React, { useDataLayerValue } from 'react';
import './index.css';
import { Home, Search, LibraryMusic } from '@mui/icons-material';

import SideBarOption from '../SideBarOption';

const SideBar = () => {
    const [{ playlists }] = useDataLayerValue();

    return (
        <div className="sidebar">
            <img
                className="sidebar__logo"
                src="https://music-b26f.kxcdn.com/wp-content/uploads/2017/06/635963274692858859903160895_spotify-logo-horizontal-black.jpg"
                alt="Spotify logo"
            />
            <SideBarOption title="Home" Icon={Home} />
            <SideBarOption title="Search" Icon={Search} />
            <SideBarOption title="Your Library" Icon={LibraryMusic} />
            <br />
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />
            {playlists?.items?.map(playlist => (
                <SideBarOption key={playlist.id} title={playlist.name} />
            ))}
        </div>
    );
};

export default SideBar;
