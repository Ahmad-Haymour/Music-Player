import React from 'react'
import {useNavigate} from 'react-router-dom'
import cloud from '../images/cloud.png'
import cloud_bg from '../images/cloud-bg.jpg'

import {styled, Typography,} from "@mui/material"

const Div = styled('div')(({theme})=> ({
    background:` url(${cloud_bg}) no-repeat center center fixed`,
    backgroundSize: 'cover',
    height: '91vh',
    width: '100%',
    margin: '0 auto'
}))

export default function Home() {
    const navigate = useNavigate()

    const handleStart = ()=>{
        navigate('/music_player')
    }

    return (
        <Div className='Home'>
            <div style={{position:'relative', right: 0 }}>
                
                <img src={cloud} alt="Cloud" height={300} width={300} />
                <Typography onClick={handleStart} variant='h3' color='violet' className='tracking-in-contract-bck'>Play Music</Typography>
            </div>
            <div className="container">
                <div className="loader"></div> 
            </div>
        </Div>
    )
}
