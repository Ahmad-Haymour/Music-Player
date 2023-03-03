import React,{  useEffect}  from 'react'
import useAudio from '../hooks/useAudio';

import {styled, Slider, Stack} from "@mui/material"
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';

const PSlider = styled(Slider)(({theme, ...props})=> ({
    color:'silver',
    height: 2,
    '&:hover':{cursor: 'auto'},
    '& .MuiSlider-thumb':{width: '13px', height:'13px', display: props.thumbless ? 'none': 'block' }
}))

export default function SoundControls({ timer}) {

    const audio = useAudio()
    const {mute, muteAudio, volume, soundLvl, isPlaying} = audio.data
    const {audioRef} = audio

    
    useEffect(()=>{
        // Set Sound Volume
        if(audioRef){
            audioRef.current.volume = volume / 100;
        }

        // Hook audio duration and setting timer 
        if(isPlaying){
            setInterval(()=>{
                const _duration = Math.floor(audioRef?.current?.duration) 
                const _elapsed = Math.floor(audioRef?.current?.currentTime) 
                
                timer.setDuration(_duration)
                timer.setElapsed(_elapsed)
            }, 100)
        }
    }, [volume, isPlaying, audioRef, timer])

    const VolumeButtons = ()=>{
        return mute ?
            <VolumeOffIcon sx={{color:'silver', '&:hover': {color:'white'} }} onClick={muteAudio} />
            : volume <= 20 ?  <VolumeMuteIcon sx={{color:'silver', '&:hover': {color:'white'} }} onClick={muteAudio} />
            : volume <= 70 ?  <VolumeDownIcon sx={{color:'silver', '&:hover': {color:'white'} }} onClick={muteAudio} />
            :   <VolumeUpIcon sx={{color:'silver', '&:hover': {color:'white'} }} onClick={muteAudio} />
    }

    return (
        <Stack direction='row' spacing={1}
            sx={{
                display: 'flex',
                justifyContent:'flex-start',
                width:'25%',
                alignItems:'center'
        }}>
            <VolumeButtons />

            <PSlider min={0} max={100} value={volume} onChange={soundLvl} />
       </Stack>
    )
}
