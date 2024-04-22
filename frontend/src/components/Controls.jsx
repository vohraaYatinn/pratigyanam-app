import React, { useCallback, useEffect, useRef, useState } from "react";

// icons
import {
	IoPlayBackSharp,
	IoPlayForwardSharp,
	IoPlaySkipBackSharp,
	IoPlaySkipForwardSharp,
	IoPlaySharp,
	IoPauseSharp,
	IoRepeatSharp,
} from "react-icons/io5";
import { MdOutlineShuffle, MdShuffleOn } from "react-icons/md";
import { IoMdVolumeHigh, IoMdVolumeOff, IoMdVolumeLow } from "react-icons/io";

const Controls = ({
	audioRef,
	progressBarRef,
	duration,
	setTimeProgress,
	tracks,
	trackIndex,
	setTrackIndex,
	setCurrentTrack,
}) => {
	const [volume, setVolume] = useState(60);
	const [isPlaying, setIsPlaying] = useState(false);
	const [muteVolume, setMuteVolume] = useState(false);
	const [shuffleMode, setShuffleMode] = useState(false);

	const togglePlayPause = () => {
		setIsPlaying((prev) => !prev);
	};

	const playAnimationRef = useRef();

	const repeat = useCallback(() => {
		const currentTime = audioRef.current.currentTime;
		setTimeProgress(currentTime);
		progressBarRef.current.value = currentTime;
		progressBarRef.current.style.setProperty(
			"--range-progress",
			`${(progressBarRef.current.value / duration) * 100}%`
		);

		playAnimationRef.current = requestAnimationFrame(repeat);
	}, [audioRef, duration, progressBarRef, setTimeProgress]);

	useEffect(() => {
		if (isPlaying) {
			audioRef.current.play();
		} else {
			audioRef.current.pause();
		}
		playAnimationRef.current = requestAnimationFrame(repeat);
	}, [isPlaying, audioRef, repeat]);

	const skipForward = () => {
		audioRef.current.currentTime += 15;
	};

	const skipBackward = () => {
		audioRef.current.currentTime -= 15;
	};

	const handlePrevious = () => {
		if (shuffleMode) {
			const randomIndex = Math.floor(Math.random() * tracks.length);
			setTrackIndex(randomIndex);
			setCurrentTrack(tracks[randomIndex]);
		} else {
			if (trackIndex === 0) {
				let lastTrackIndex = tracks.length - 1;
				setTrackIndex(lastTrackIndex);
				setCurrentTrack(tracks[lastTrackIndex]);
			} else {
				setTrackIndex((prev) => prev - 1);
				setCurrentTrack(tracks[trackIndex - 1]);
			}
		}
	};

	const handleNext = () => {
		if (shuffleMode) {
			const randomIndex = Math.floor(Math.random() * tracks.length);
			setTrackIndex(randomIndex);
			setCurrentTrack(tracks[randomIndex]);
		} else {
			if (trackIndex >= tracks.length - 1) {
				setTrackIndex(0);
				setCurrentTrack(tracks[0]);
			} else {
				setTrackIndex((prev) => prev + 1);
				setCurrentTrack(tracks[trackIndex + 1]);
			}
		}
	};

	useEffect(() => {
		if (audioRef) {
			audioRef.current.volume = volume / 100;
			audioRef.current.muted = muteVolume;
		}
	}, [volume, audioRef, muteVolume]);

	return (
		<div className="controls-wrapper">
			<div className="controls w-full flex flex-col sm:flex-row justify-center sm:gap-5 ">
				<div className="flex justify-center text-2xl gap-5 sm:my-5 my-2">
					<button onClick={handlePrevious}>
						<IoPlaySkipBackSharp />
					</button>
					<button onClick={skipBackward}>
						<IoPlayBackSharp />
					</button>

					<button onClick={togglePlayPause}>
						{isPlaying ? <IoPauseSharp /> : <IoPlaySharp />}
					</button>
					<button onClick={skipForward}>
						<IoPlayForwardSharp />
					</button>
					<button onClick={handleNext}>
						<IoPlaySkipForwardSharp />
					</button>
					<button onClick={() => setShuffleMode((prev) => !prev)}>
						{shuffleMode ? <MdShuffleOn /> : <MdOutlineShuffle />}
					</button>
				</div>
				<div className="volume flex items-center  gap-3 justify-center text-3xl">
					<button onClick={() => setMuteVolume((prev) => !prev)}>
						{muteVolume || volume < 5 ? (
							<IoMdVolumeOff />
						) : volume < 40 ? (
							<IoMdVolumeLow />
						) : (
							<IoMdVolumeHigh />
						)}
					</button>
					<input
						type="range"
						min={0}
						max={100}
						className="h-1 bg-white rounded-lg appearance-none cursor-pointer range-sm "
						value={volume}
						onChange={(e) => setVolume(e.target.value)}
					/>
				</div>
			</div>
		</div>
	);
};

export default Controls;
