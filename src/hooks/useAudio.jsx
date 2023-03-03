import React , {useState , useEffect , createContext, useRef } from "react";

import songs from "../hooks/audios-db"

const Context = createContext({
    data : null,
    audioRef: null,

    index: 0,
    currentSong: {},

    mute: false,
    volume: 0,
    muteAudio: ()=> null,
    soundLvl : (e,v)=> null,

    togglePlay: ()=> null,
    skipBackward: ()=> null,
    skipForward: ()=> null,
    prevAudio: ()=> null,
    nextAudio: ()=> null,
    addToFavorite: ()=> null,
})

export function AudioProvider(props){

    const [index, setIndex] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)

    const [currentSong] = useState(songs[index])
    const [volume, setVolume] = useState(50)
    const [mute, setMute] = useState(false)

    const [redColor, setRedColor] = useState(false)
    const [favoriteSongs, setFavoriteSongs ] = useState( JSON.parse(localStorage.getItem('songs')) || [] )

    useEffect(()=>{        
        const foundedSong = favoriteSongs.find( song => song.id === songs[index].id)        
        if(foundedSong) setRedColor(true)
        else setRedColor(false)

    }, [ index, redColor, favoriteSongs])
     

    const audioRef = useRef()
    const data = {

        index: index,
        mute: mute,
        volume: volume,
        currentSong: currentSong,
        isPlaying: isPlaying,
        favoriteSongs: [],
        redColor: redColor,

        muteAudio: ()=> setMute(!mute),
        soundLvl : (e,v)=> setVolume(v),

        togglePlay : ()=>{
            if(!isPlaying){
                audioRef?.current.play()
            }else {
                audioRef?.current.pause()
            }
            setIsPlaying(prev => !prev)
        },

        skipForward : ()=>{
            audioRef.current.currentTime += 10
        },

        skipBackward : ()=>{
            audioRef.current.currentTime -= 10
        },

        prevAudio : ()=>{
            if(index > 0 ){
                setIndex(prev => prev - 1)
                audioRef.current.src = songs[index - 1].src
                audioRef.current.play()
                console.log('Song Back')
            }
            else {
                setIndex(songs.length - 1)
                audioRef.current.src = songs[songs.length - 1].src
                audioRef.current.play()
                console.log(`Song Back if index => ${index}, \n playlist Length=>  ${songs.length -1}`)
            }
        },

        nextAudio : ()=>{
            if(index >= songs.length - 1){
                setIndex(0)
                audioRef.current.src = songs[0]?.src
                audioRef.current.play()
                setIsPlaying(true)
            } else {
                setIndex(index +1)
                audioRef.current.src = songs[index + 1]?.src
                audioRef.current.play()
                setIsPlaying(true)
            }
        },

        addToFavorite: ()=>{
            const favoriteCopy = [...favoriteSongs]
            const foundedSong = favoriteCopy.find( song => song.id === songs[index].id)
    
            if( !foundedSong ){
                favoriteCopy.push(songs[index])
                setFavoriteSongs(favoriteCopy)
                localStorage.setItem('songs', JSON.stringify(favoriteCopy))
                setRedColor(true)
            }
            else {
                let newArray = favoriteCopy.filter(song => song.id !== songs[index].id)
                setFavoriteSongs(newArray)
                localStorage.setItem('songs', JSON.stringify(newArray))
                setRedColor(false)
            }
        },
    }

    return(
        <Context.Provider value={{data, audioRef, setIndex, setIsPlaying, setRedColor}} >
            {props.children}
        </Context.Provider>
    )
}

export default function useAudio(){
    return React.useContext(Context)
}