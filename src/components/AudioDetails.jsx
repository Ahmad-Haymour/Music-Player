import React from 'react'
import useAudio from '../hooks/useAudio'

import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function AudioDetails({song}) {
    
    const audio = useAudio()
    const { setIndex , setIsPlaying, audioRef } = audio
    
    // Handle Play Selected Audio from  Playlist
    const handlePlaySelectedAudio = () =>{
        setIndex(song.id)
        setIsPlaying(true)
        audioRef.current.src = song.src
        audioRef.current.play()
    }

    return (
        <Box onClick={handlePlaySelectedAudio} 
             sx={{
                display: 'flex',
                flexDirection: 'column', 
                margin:'20px', 
                backgroundColor:'rgb(0,0,0,.5)', 
                cursor:'pointer' ,
                position:'relative'
        }}>
            <CardMedia
                    component="img"
                    sx={{ width: 260, height: 300 }}
                    image={song?.img_src}
                    alt="Live from space album cover"
            />
            <CardContent sx={{ color: 'white'}}>
                <Typography component="div" variant="h5">
                    {song?.title}
                </Typography>
                <Typography variant="subtitle1" color="gray" component="div">
                    {song?.artist}
                </Typography>
            </CardContent>
        </Box>
    )
}
