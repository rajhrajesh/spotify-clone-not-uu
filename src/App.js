import React, { useEffect } from 'react';
import Login from './components/Login';
import Player from './components/Player';
import { getTokenFromUrl } from './utils';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from './context';
import './App.css';

const spotify = new SpotifyWebApi();

const App = () => {
    const [{ token }, dispatch] = useDataLayerValue();

    useEffect(() => {
        const hash = getTokenFromUrl();
        window.location.hash = "";
        const _token = hash.access_token;

        if (_token) {
            dispatch({ type: "SET_TOKEN", token: _token });
            spotify.setAccessToken(_token);

            spotify.getMe().then(user => {
                dispatch({ type: "SET_USER", user });
            });

            spotify.getUserPlaylists().then(playlists => {
                dispatch({ type: "SET_PLAYLISTS", playlists });
            });

            spotify.getPlaylist("37i9dQZF1E34Ucml4HHx1w").then(playlist => {
                dispatch({ type: "SET_DISCOVER_WEEKLY", discover_weekly: playlist });
            });
        }
    }, [dispatch]);

    return (
        <div className='App'>
            {token ? <Player spotify={spotify} /> : <Login />}
        </div>
    );
};

export default App;
