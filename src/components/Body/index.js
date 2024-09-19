// Body.js
import React from 'react';
import './index.css';
import Header from '../Header';
import SongRow from '../SongRow';
import { PlayCircleFilled, Favorite, MoreHoriz } from '@mui/icons-material';
import { useDataLayerValue } from '../../context';

const Body = ({ spotify }) => {
    const [{ discover_weekly }] = useDataLayerValue();

    return (
        <div className="body">
            <Header spotify={spotify} />
            <div className="body__info">
                <img src={discover_weekly?.images[0]?.url} alt="" />
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>
            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilled className="body__shuffle" />
                    <Favorite fontSize="large" />
                    <MoreHoriz />
                </div>
                {discover_weekly?.tracks.items.map(item => (
                    <SongRow key={item.track.id} track={item.track} />
                ))}
            </div>
        </div>
    );
};

export default Body;
