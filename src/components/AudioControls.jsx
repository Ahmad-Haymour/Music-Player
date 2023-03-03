import React from 'react'
import {useLocation} from "react-router-dom"
import useAudio from '../hooks/useAudio';

// Material Icons
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import FastForwardIcon from '@mui/icons-material/FastForward';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';

import { styled, Stack } from "@mui/material"

const Div = styled('div')(({theme})=> ({
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: theme.spacing(.5),
    margin:'0 0 0 25px'

}))

export default function SoundControls() {
    const location = useLocation()
    const audio = useAudio()
    const { isPlaying, togglePlay, skipForward, skipBackward, prevAudio, nextAudio } = audio.data

    return (
        <Div sx={{
            width: (location.pathname !== '/music_player') ? '400px': '400px'
        }} >
            <Stack direction='row' spacing={5}
                sx={{
                display:'flex', alignItems:'center', justifyContent:'center', 
            }} >
                <FastRewindIcon sx={{color:'silver', '&:hover': {color:'white', cursor:'pointer'} }} onClick={prevAudio} />
                <SkipPreviousIcon sx={{color:'silver', '&:hover': {color:'white', cursor:'pointer'}, height: 42, width: 42, fontWeight:'bold' }} onClick={skipBackward} />

                { !isPlaying ? 
                    <PlayArrowIcon sx={{color:'silver', '&:hover': {color:'white', cursor:'pointer'}, height: 42, width: 42, fontWeight:'bold' }} onClick={togglePlay} />
                    :
                    <PauseIcon sx={{color:'silver', '&:hover': {color:'white', cursor:'pointer'},  height: 42, width: 42, fontWeight:'bold' }} onClick={togglePlay} />
                }

                <SkipNextIcon sx={{color:'silver', '&:hover': {color:'white', cursor:'pointer'}, height: 42, width: 42, fontWeight:'bold' }} onClick={skipForward} />
                <FastForwardIcon sx={{color:'silver', '&:hover': {color:'white', cursor:'pointer'}, height: 25, width: 25 }} onClick={nextAudio} />
            </Stack>
        </Div>
    
    )
}
