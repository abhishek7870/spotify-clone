
export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri ="http://localhost:3000/"
const clientId ="20231a0c79084144b0e3961c50bff2f9"

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromUrl = ()=>{
    return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial,item) =>{
        var parts = item.split("=");
        initial[parts[0]] = 
        decodeURIComponent(parts[1]);
        return initial;
    },{});
}


export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scopes=${scopes.join("%20")}&response_type=token&show_dialog=true`;