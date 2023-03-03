import React, {useState} from 'react'
import {Routes, Route, useLocation} from "react-router-dom"
import Navigator from "./components/Navigator"
import GlobalPlayer from "./components/GlobalPlayer"

import Home from './pages/Home'
import MusicPlayer from "./pages/MusicPlayer"
import Playlist from "./pages/Playlist"
import Favorite from "./pages/Favorite"

import { AudioProvider } from './hooks/useAudio';

import './App.css';

function App() {

  const location = useLocation()  

  const [elapsed, setElapsed] = useState(0)
  const [duration, setDuration] = useState(0)

  const timer = {
    elapsed: elapsed,
    setElapsed: setElapsed,
    duration: duration,
    setDuration: setDuration
  }

  return (
    <AudioProvider>
        <div className="App">
            <Navigator/>

            <Routes>
                <Route path='/' element={ <Home/> } />

                <Route path='/:music_player' element={ <MusicPlayer timer={timer} /> } />
                <Route path='/playlist' element={ <Playlist /> } />
                <Route path='/favorite' element={ <Favorite /> } />

            </Routes>
            {
              (location.pathname !== '/music_player') && (location.pathname !== '/') &&

              <GlobalPlayer  timer={timer} />
            }
        </div>
    </AudioProvider>
  );
}

export default App;
