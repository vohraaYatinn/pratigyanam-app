import React, { useState } from 'react'
import TopNav from '../components/TopNav'
import img1 from '../data/1.jpg'
import { RiHeartLine } from 'react-icons/ri'
import { IoPauseSharp, IoPlayBackSharp, IoPlayForwardSharp, IoPlaySharp, IoPlaySkipBackSharp, IoPlaySkipForwardSharp } from 'react-icons/io5'
import { MdOutlineShuffle, MdRepeat, MdRepeatOn, MdShuffleOn } from 'react-icons/md'
import ProgressBar from '../components/ProgressBar'

const SingleTrack = () => {

	const [isPlaying, setIsPlaying] = useState(false);

    const [shuffleMode, setShuffleMode] = useState(false);
	const [repeatMode, setRepeatMode] = useState(false);

  return (
    <div className=" w-screen">
			<TopNav path={"audio"}/>
            <section>
            <div>
                 <img src={img1} className='h-64 w-64 mx-auto mt-16 rounded-xl' alt="" />
            </div>
            <div className='flex items-center text-3xl justify-between mx-5 gap-3 mt-20  p-5 rounded-xl'>
                <div>
                <h4  className='font-semibold'>Sound Track 6</h4>
                    <p className='text-lg'>Author name here </p>        
                </div>

                <RiHeartLine size={40}/>
            </div>
            <div className='flex items-center font-semibold mx-5 gap-3 text-2xl mt-10'>
            <span className="time current">01:00</span>
			<input
				className="w-full tracker h-2 bg-black rounded-lg appearance-none cursor-pointer range-sm "
				type="range"
			/>
			<span className="time">03:00</span>
            </div>
            <div className="controls w-full flex flex-col sm:flex-row  justify-center mt-10 sm:gap-5 ">
				<div className="">
					<div className='flex justify-center text-4xl gap-3  sm:my-5 my-4'>
                        <button className='bg-black text-white rounded-2xl text-center   p-3'>
						    <IoPlaySkipBackSharp />
					    </button>
					    <button className='bg-black text-white rounded-2xl text-center   p-3'>
						    <IoPlayBackSharp />
					    </button>

					    <button  className='bg-black text-white rounded-2xl text-center   p-3'>
						    {isPlaying ? <IoPauseSharp /> : <IoPlaySharp />}
					    </button>
					    <button className='bg-black text-white rounded-2xl text-center   p-3'>
						    <IoPlayForwardSharp />
					    </button>
					    <button className='bg-black text-white rounded-2xl text-center   p-3'>
						    <IoPlaySkipForwardSharp />
					    </button>
                    </div>
					<div className='flex justify-center text-5xl mb-8 gap-5 sm:my-5 my-4'>
                        <button onClick={() => setShuffleMode((prev) => !prev)}>
						    {shuffleMode ? <MdShuffleOn /> : <MdOutlineShuffle />}
					    </button>
					    <button onClick={() => setRepeatMode((prev) => !prev)}>
						    {repeatMode ? <MdRepeatOn /> : <MdRepeat />}
					    </button>
                    </div>
				</div>
			</div>
            </section>
    </div>
  )
}

export default SingleTrack