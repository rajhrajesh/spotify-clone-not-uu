// Spotify.js
export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "https://3001-cs-22039308829-default.cs-asia-southeast1-fork.cloudshell.dev/";
const clientId = "4796f71294cc446497d1ce88bc6dd0c3"; // Replace with your Spotify client ID

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split("&")
        .reduce((initial, item) => {
            let parts = item.split("=");
            initial[parts[0]] = decodeURIComponent(parts[1]);
            return initial;
        }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
)}&response_type=token&show_dialog=true`;
