import React, { useEffect, useState, useRef } from 'react';
import TopNav from '../components/TopNav';
import { RiHeartLine } from 'react-icons/ri';
import { IoPauseSharp, IoPlayBackSharp, IoPlayForwardSharp, IoPlaySharp, IoPlaySkipBackSharp, IoPlaySkipForwardSharp } from 'react-icons/io5';
import { MdOutlineShuffle, MdRepeat, MdRepeatOn, MdShuffleOn } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import { tracks } from '../data/tracks';

const SingleTrack = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [shuffleMode, setShuffleMode] = useState(false);
    const [trackIndex, setTrackIndex] = useState(0); // Track index to keep track of current track
    const [track, setTrack] = useState();
    const [repeatMode, setRepeatMode] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const audioRef = useRef(null);
    const rangeInputRef = useRef(null);

    let { id } = useParams();

    useEffect(() => {
        const selectedTrack = tracks.find(track => track.id === id);
        const initialIndex = id ? tracks.findIndex(track => track.id === id) : 0;
        setTrack(selectedTrack);
        setTrackIndex(initialIndex);
    }, [id]);

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            audio.addEventListener('timeupdate', () => {
                setCurrentTime(audio.currentTime);
                setDuration(audio.duration);
            });
        }
    }, [track]);

    const togglePlay = () => {
        const audio = audioRef.current;
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleTimeChange = (e) => {
        const newTime = parseFloat(e.target.value);
        setCurrentTime(newTime);
        const audio = audioRef.current;
        audio.currentTime = newTime;
    };

    const skipForward = () => {
        const audio = audioRef.current;
        audio.currentTime += 15;
        setCurrentTime(audio.currentTime); // Update current time
        rangeInputRef.current.value = audio.currentTime; // Update range input value
    };
    
    const skipBackward = () => {
        const audio = audioRef.current;
        audio.currentTime -= 15;
        setCurrentTime(audio.currentTime); // Update current time
        rangeInputRef.current.value = audio.currentTime; // Update range input value
    };

    const handleNext = () => {
        setTrackIndex((prevIndex) => {
            const newIndex = (prevIndex + 1) % tracks.length; // Calculate the index of the next track
            return newIndex;
        });
        setIsPlaying(true); // Start playing the next track
    };
    
    const handlePrevious = () => {
        setTrackIndex((prevIndex) => {
            // Calculate the index of the previous track
            let newIndex = prevIndex - 1;
            // If the index becomes negative, set it to the last item of the array
            if (newIndex < 0) {
                newIndex = tracks.length - 1;
            }
            return newIndex;
        });
        setIsPlaying(true); // Start playing the previous track
    };
    

    useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
            audio.currentTime = 0; // Reset current time when changing tracks
            setCurrentTime(0); // Reset current time state
            audio.load(); // Load the new audio source
            audio.play(); // Start playing the new audio source
        }
    }, [trackIndex]);
    
    useEffect(() => {
        setTrack(tracks[trackIndex]); // Update the current track when trackIndex changes
    }, [trackIndex, setTrack]);
    
    

    return (
        <div className="w-screen sound-sound-div">
            <TopNav path={"audio"}  />
            <section className=''>
                <div>
                    {/* <img src={track?.img} className='absolute bottom-60 h-[510px]  rounded-xl px-1' alt="" 
                    style={{
                        objectFit:"cover"
                    }}
                    /> */}
                </div>
                <div className='flex absolute bottom-20  items-center text-2xl w-full mx-5 gap-3  p-5 rounded-xl'>
                    <div>
                        <div className='flex items-center gap-3 justify-between w-full'>
                        <span className='font-semibold text-3xl'>{track?.title} </span>
                        {/* <RiHeartLine size={30}/> */}
                        </div>
                        <span className='text-lg'>{track?.author} </span>
                    </div>
                </div>
                <div className='flex absolute bottom-20 w-[80%] justify-center items-center font-semibold mx-5 gap-3 text-sm '>
                    <span className="time current">{formatTime(currentTime)}</span>
                    <input
                        ref={rangeInputRef}
                        className=" bg-black tracker2 h-[1px] rounded-full  cursor-pointer range-sm"
                        type="range"
                        value={currentTime}
                        max={duration || 0}
                        onChange={handleTimeChange}
                        style={{height: "3px"}}
                    />
                    <span className="time">{formatTime(duration)}</span>
                </div>
                <div className="controls w-full flex flex-col sm:flex-row justify-center  sm:gap-5 ">
                    <div className="fixed w-full bottom-0">
                        <div className='flex justify-center text-2xl   sm:my-5 my-4'>
                            <button onClick={handlePrevious} className='bg-black mx-2 rounded-sm text-center   p-2 check-it-buttons'>
                                <IoPlaySkipBackSharp />
                            </button>
                            <button onClick={skipBackward} className='bg-black mx-2 rounded-sm text-center   p-2 check-it-buttons'>
                                <IoPlayBackSharp />
                            </button>
                            <button className='bg-black mx-2 rounded-sm text-center  check-it-buttons p-2' onClick={togglePlay}>
                                {isPlaying ? <IoPauseSharp /> : <IoPlaySharp />}
                            </button>
                            <button onClick={skipForward} className='bg-black mx-2 rounded-sm text-center   p-2 check-it-buttons'>
                                <IoPlayForwardSharp />
                            </button>
                            <button onClick={handleNext} className='bg-black mx-2 rounded-sm text-center   p-2 check-it-buttons'>
                                <IoPlaySkipForwardSharp />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            {track && (
                <audio ref={audioRef} src={track.src} preload="metadata" />
            )}
        </div>
    );
};

const formatTime = (time) => {
    if (isNaN(time)) return "--:--";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

export default SingleTrack;
