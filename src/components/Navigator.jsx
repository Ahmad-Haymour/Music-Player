import React from 'react'
import {Link} from "react-router-dom"
import useAudio from '../hooks/useAudio'
import { AppBar, Toolbar, Typography} from "@mui/material"

export default function Navigator(){
        
      const audio = useAudio()
      const {currentSong, mute, nextAudio, isPlaying} = audio?.data

      return (
        <React.Fragment>
          <AppBar position="sticky" sx={{color:'black', backgroundColor:'rgb(0,0,0,.6)'}} >
            <Toolbar spacing={'5'} sx={{display: 'flex', gap:'25px' , listStyle: 'none', backgroundColor:'transparent'}}>
              <li>
                <Link to={'/'} >Home</Link>
              </li>
              <li>
                <Link to={'/music_player'}>Music Player</Link>
              </li>
              <li>
                <Link to={'/playlist'}>Playlist</Link>
              </li>
              <li>
                <Link to={'/favorite'}>Favorite</Link>
              </li>
            </Toolbar>
         
            { isPlaying && 
              <Typography color='white' sx={{position: 'absolute', top:20, left: '47%' }} >
                Playing Music..
              </Typography>
            }
          </AppBar>
          
          <audio src={currentSong?.src}  ref={ audio.audioRef} muted={mute} onEnded={nextAudio} />

        </React.Fragment>
      );
    
}