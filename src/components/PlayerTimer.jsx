import React from 'react'
import { styled, Typography, Slider, Stack} from "@mui/material"

const PSlider = styled(Slider)(({theme, ...props})=> ({
    color:'silver',
    height: 2,
    '&:hover':{cursor: 'auto'},
    '& .MuiSlider-thumb':{width: '13px', height:'13px', display: props.thumbless ? 'none': 'block' }
}))

export default function PlayerTimer({timer}) {
    
    const {elapsed, duration} = timer

    // Audio Timer Formatter
    function formatTime(time){

        if(time && !isNaN(time)){

            const minutes = Math.floor(time / 60) < 10 ? `0${Math.floor(time / 60)}` : Math.floor(time / 60)
            const seconds = Math.floor(time % 60) < 10 ? `0${Math.floor(time % 60)}` : Math.floor(time % 60)
            
            return `${minutes}:${seconds}`
        }
        return "00:00"
    }

    return (
        <Stack  spacing={2} direction='row' color='white'
        sx={{display:'flex', justifyContent:'center', margin: '0'}} 
        >
            <Typography>{formatTime(elapsed)}</Typography>
            <PSlider thumbless='true' value={elapsed} max={duration?duration:0} />
            <Typography>{formatTime(duration - elapsed)}</Typography>
        </Stack>
    )
}
