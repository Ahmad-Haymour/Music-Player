import * as React from 'react';
import AudioDetails from "../components/AudioDetails";

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

export default function Favorite() {

    // Favorite Songs in Local Storage
    const favList = JSON.parse(localStorage.getItem('songs') )
    
    return (
        <Box sx={{ backgroundColor:'transparent'}}>
            <Card sx={{ 
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: "center",
                backgroundColor: 'transparent ',
                marginTop: 0,
            }}>
                {   
                    favList?.map( (song)=>(
                        <AudioDetails song={song} key={song.id} />
                    ))
                }
                
                {!favList && <h1 style={{color: 'lightgray', marginTop:'25%'}} > Favorite List is empty </h1>}
            </Card>
        </Box>
    )
}