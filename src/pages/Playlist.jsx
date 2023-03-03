import * as React from 'react';
import songs from "../hooks/audios-db";
import AudioDetails from "../components/AudioDetails";

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

export default function Playlist() {
    return (
        <Box sx={{ backgroundColor:'transparent', paddingBottom:'150px'}}>
            <Card sx={{ 
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: "center",
                backgroundColor: 'transparent ',
                marginTop: 0 ,
            }}>
                {
                    songs?.map( (song)=>(

                        <AudioDetails song={song} key={song.id} />
                       
                    ))
                }
            </Card>
        </Box>
    )
}