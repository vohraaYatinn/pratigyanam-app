import { BsMusicNoteBeamed } from "react-icons/bs";

const DisplayTrack = ({
	currentTrack,
	audioRef,
	setDuration,
	progressBarRef,
	handleNext,
}) => {
	const onLoadedMetadata = () => {
		const seconds = audioRef.current.duration;
		setDuration(seconds);
		progressBarRef.current.max = seconds;
	};

	return (
		<div className="text-black">
			<audio
				src={currentTrack.src}
				ref={audioRef}
				onLoadedMetadata={onLoadedMetadata}
				onEnded={handleNext}
			/>
			<div className="audio-info">
				<div className="text">
					<p className="title text-center font-bold text-xl">
						{currentTrack.title} by {currentTrack.author}{" "}
					</p>
				</div>
			</div>
		</div>
	);
};
export default DisplayTrack;
