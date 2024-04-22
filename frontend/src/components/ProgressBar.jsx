const ProgressBar = ({ progressBarRef, timeProgress, duration, audioRef }) => {
	const handleProgressChange = () => {
		audioRef.current.currentTime = progressBarRef.current.value;
	};

	const formatTime = (time) => {
		if (time && !isNaN(time)) {
			const minutes = Math.floor(time / 60);
			const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
			const seconds = Math.floor(time % 60);
			const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
			return `${formatMinutes}:${formatSeconds}`;
		}
		return "00:00";
	};

	return (
		<div className="progress flex gap-2 items-center justify-center py-3 px-5">
			<span className="time current">{formatTime(timeProgress)}</span>
			<input
				className="w-full h-2 bg-white rounded-lg appearance-none cursor-pointer range-sm "
				type="range"
				ref={progressBarRef}
				defaultValue="0"
				onChange={handleProgressChange}
			/>
			<span className="time">{formatTime(duration)}</span>
		</div>
	);
};

export default ProgressBar;
