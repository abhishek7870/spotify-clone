import React from 'react'
import './Player.css';
import Sidebar from './Sidebar';
import Body from '../component/Body';
import Footer from '../component/Footer';
function Player({spotify}) {
    return (
        <div className="player">
            <div className="player__body">
                <Sidebar />
                <Body spotify={spotify}/>
                
                  
            </div>
            <Footer />
            
        </div>
    )
}

export default Player
