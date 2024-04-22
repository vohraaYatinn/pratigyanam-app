import { useEffect, useRef, useState } from "react";
import { tracks } from "../data/tracks";

// import components
import DisplayTrack from "./DisplayTrack";
import Controls from "./Controls";
import ProgressBar from "./ProgressBar";

const AudioPlayer = ({ selectedTrack }) => {
	const [trackIndex, setTrackIndex] = useState(0);
	const [currentTrack, setCurrentTrack] = useState(selectedTrack);
	const [timeProgress, setTimeProgress] = useState(0);
	const [duration, setDuration] = useState(0);

	const audioRef = useRef();
	const progressBarRef = useRef();

	useEffect(() => {
		setCurrentTrack(selectedTrack);
	}, [selectedTrack]);

	const handleNext = () => {
		if (trackIndex >= tracks.length - 1) {
			setTrackIndex(0);
			setCurrentTrack(tracks[0]);
		} else {
			setTrackIndex((prev) => prev + 1);
			setCurrentTrack(tracks[trackIndex + 1]);
		}
	};

	return (
		<div className="audio-player border-t border-black bg-gradient-to-r from-orange-500 to-yellow-500 text-white fixed bottom-0 w-screen">
			<div className="inner">
				<ProgressBar
					{...{ progressBarRef, timeProgress, duration, audioRef }}
				/>
				<DisplayTrack
					{...{
						currentTrack,
						audioRef,
						setDuration,
						progressBarRef,
						handleNext,
					}}
				/>
				<Controls
					{...{
						audioRef,
						progressBarRef,
						duration,
						setTimeProgress,
						tracks,
						trackIndex,
						setTrackIndex,
						setCurrentTrack,
						handleNext,
					}}
				/>
			</div>
		</div>
	);
};
export default AudioPlayer;
