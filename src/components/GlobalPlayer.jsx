import React from 'react'
import useAudio from '../hooks/useAudio';
import songs from '../hooks/audios-db';
import SoundControls from "../components/SoundControls"
import AudioControls from "../components/AudioControls"
import PlayerTimer from "../components/PlayerTimer"

// Material Icons & Styled Components
import {styled,  Paper, Box, Typography} from "@mui/material"
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Div = styled('div')(({theme})=> ({
    backgroundColor: 'transparent',
    height: '145px',
    width: '100vw',
    position:'fixed',
    bottom:'0',
}))

const CustomPaper = styled(Paper)(({theme})=> ({
    backgroundColor:'rgb(0,0,0,.8)',
    margin: '0 auto',
    padding: theme.spacing(5),
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection:'column',
    justifyContent: 'center',
    gap:'15px',

}))

export default function GlobalPlayer({timer}) {
    
    const audio = useAudio()
    const { addToFavorite, redColor, index } = audio.data
    const title = songs[index].title
    
    return (
        <Div>
            <Box  sx={{display:'flex', flexDirection: 'column', alignItems:'center'}} >            
                    
                <CustomPaper >

                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-around', marginBottom: '5px'}} >

                        <SoundControls timer={timer} />  
                        
                        <AudioControls />

                        <Typography color='purple' variant='h4' sx={{textShadow:'-1.5px 1.5px 2px darkgray', marginRight: '2rem', width:'250px'}} >
                                {
                                    (title.length > 11) ? 
                                    title?.slice(0,11) + '...'
                                    :
                                    title
                                }
                        </Typography>

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
