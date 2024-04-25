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
    const [track, setTrack] = useState();
    const [repeatMode, setRepeatMode] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const audioRef = useRef(null);
    const rangeInputRef = useRef(null);

    let { id } = useParams();

    useEffect(() => {
        const selectedTrack = tracks.find(track => track.id === id);
        setTrack(selectedTrack);
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
	
    return (
        <div className="w-screen">
            <TopNav path={"audio"} />
            <section>
                <div>
                    <img src={track?.img} className='h-64 w-64 mx-auto mt-16 rounded-xl' alt="" />
                </div>
                <div className='flex items-center text-3xl justify-between mx-5 gap-3 mt-20 p-5 rounded-xl'>
                    <div>
                        <h4 className='font-semibold'>{track?.title}</h4>
                        <p className='text-lg'>{track?.author}</p>
                    </div>
                    <RiHeartLine size={40} />
                </div>
                <div className='flex items-center font-semibold mx-5 gap-3 text-2xl mt-10'>
                    <span className="time current">{formatTime(currentTime)}</span>
                    <input
                        ref={rangeInputRef}
                        className="w-full tracker h-2 bg-black rounded-lg appearance-none cursor-pointer range-sm"
                        type="range"
                        value={currentTime}
                        max={duration || 0}
                        onChange={handleTimeChange}
                    />
                    <span className="time">{formatTime(duration)}</span>
                </div>
                <div className="controls w-full flex flex-col sm:flex-row justify-center mt-10 sm:gap-5 ">
                    <div className="">
                        <div className='flex justify-center text-4xl gap-3  sm:my-5 my-4'>
                            <button  className='bg-black text-white rounded-2xl text-center   p-3'>
                                <IoPlaySkipBackSharp />
                            </button>
                            <button onClick={skipBackward} className='bg-black text-white rounded-2xl text-center   p-3'>
                                <IoPlayBackSharp />
                            </button>
                            <button className='bg-black text-white rounded-2xl text-center   p-3' onClick={togglePlay}>
                                {isPlaying ? <IoPauseSharp /> : <IoPlaySharp />}
                            </button>
                            <button onClick={skipForward} className='bg-black text-white rounded-2xl text-center   p-3'>
                                <IoPlayForwardSharp />
                            </button>
                            <button className='bg-black text-white rounded-2xl text-center   p-3'>
                                <IoPlaySkipForwardSharp />
                            </button>
                        </div>
                        <div className='flex justify-center text-5xl mb-8 gap-5 sm:my-5 my-4'>
                            <button onClick={() => setShuffleMode(prev => !prev)}>
                                {shuffleMode ? <MdShuffleOn /> : <MdOutlineShuffle />}
                            </button>
                            <button onClick={() => setRepeatMode(prev => !prev)}>
                                {repeatMode ? <MdRepeatOn /> : <MdRepeat />}
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
