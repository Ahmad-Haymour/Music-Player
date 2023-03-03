import React from 'react'
import useAudio from '../hooks/useAudio';
import SoundControls from "../components/SoundControls"
import AudioControls from "../components/AudioControls"
import PlayerTimer from "../components/PlayerTimer"

import songs from "../hooks/audios-db"

// Material Icons & Styled Components
import {styled,  Paper, Box, Typography,} from "@mui/material"
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
// import ReplayIcon from '@mui/icons-material/Replay';

const Div = styled('div')(({theme})=> ({
    backgroundSize: 'cover',
    height: '100%',
    width: '100%',
    margin: '0 auto'
}))

const CustomPaper = styled(Paper)(({theme})=> ({
    backgroundColor:'rgb(0,0,0,.5)',
    margin: '20px auto 0',
    width: '80%',
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'center',
    padding: theme.spacing(3.6)
}))

export default function MusicPlayer({timer}){
    
    // Context hooks
    const audio = useAudio()
    const { index, addToFavorite, redColor } = audio.data
     
    return (
        <Div>
            <Box  sx={{display:'grid', placeItems: 'center' }} >

                <Box sx={{display:'flex', alignItems: 'center'}}>
                    <Typography variant='h4' sx={{color:'darkgray', textShadow:'-2px 3px  black', width:'150px',
                    //  backgroundColor:'rgb(0,0,0,.5)'
                     }} >
                        {songs[index].title}
                    </Typography>

                    <img src={songs[index]?.img_src} alt="Audio Thumb" width='450' height="450" style={{margin:'1.2rem 1rem'}}  />

                    <Typography variant='h4' sx={{color:'darkgray', textShadow:'3px 5px 5px red', width:'150px'}} >
                        {songs[index].artist}
                    </Typography>
                </Box>
                    
                <CustomPaper>
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between'}} >

                        <SoundControls timer={timer} />  
                        
                        <AudioControls />

                        <IconButton aria-label="favorite"  sx={{ width: '50px'}} onClick={addToFavorite } >
                            <FavoriteIcon sx={{ height: 35, width: 35, color: redColor ? '#FE251B' :'white', '&:hover': {color:'#FE251B'} }} />
                        </IconButton>

                    </Box>

                    <PlayerTimer timer={timer} />
                </CustomPaper>
            </Box> 
        </Div>
    )
}