import React,{useEffect,useState} from 'react';
import './App.css';
import Login from './component/Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue} from "./DataLayer";
import Player from './component/Player';
const spotify = new SpotifyWebApi();

function App() {
  const [{user,token}, dispatch] = useDataLayerValue();
  useEffect(() => {
    const hash =getTokenFromUrl();
    window.location.hash="";
    const _token =hash.access_token;
    console.log(_token);


    if(_token)
    {
     // spotify.setAccessToken(_token);
      dispatch({
        type:"SET_TOKEN",
        token:_token,
      });
      
      spotify.setAccessToken(_token);
      spotify.getMe().then(user =>{
        console.log('user',user);
        dispatch({
          type:'SET_USER',
          user:user
        });
      });
      spotify.getUserPlaylists().then((playlists) =>{
        dispatch({
          type:'SET_PLAYLISTS',
          playlists:playlists,
        });
      });
      spotify.getPlaylist('3aTXQQrYO6zuPEC5pcDD1A').then(response =>
        dispatch({
          type:"SET_DISCOVER_WEEKLY",
          discover_weekly:response,
        })
        );

    }  
  }, [token,dispatch])

  console.log('user',user);

  return (
    <div className="app">
      { token?<Player spotify={spotify} /> : <Login />  }
      
    </div>
  );
}

export default App;
