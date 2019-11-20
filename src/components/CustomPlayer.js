import React, { useRef, useEffect, useState } from "react";
import { PlayButton, PauseButton } from "../stylesheets/svgs/SvgCaller";

import SoundcloudWidget from "soundcloud-widget";
function CustomPlayer() {
	const widget = useRef();
	const currentSongTime = useRef();
	const fullSongTime = useRef();
	const [time, setTime] = useState(0);
	const [songTitle, setSongTitle] = useState("no song");
	const [songDuration, setSongDuration] = useState();
	const [songProgress, setSongProgress] = useState(0);
	const [playing, setPlaying] = useState(false);

	function handleWidgetClick() {
		const scEmbed = document.getElementById("soundcloud-embed");
		scEmbed.classList.toggle("open-soundcloud");
	}

	function handlePlayButton() {
		setPlaying(playing ? false : true);
	}

	async function getCurrentSongTime() {
		const time = await widget.current.getPosition();
		return time;
	}

	function setProgressValue() {
		return currentSongTime.current / fullSongTime.current;
	}

	async function seek(event) {
		const elementWidth = event.target.offsetWidth;
		const clickPos = event.nativeEvent.offsetX;
		const difference = clickPos / elementWidth;
		const newPosition = Math.floor(fullSongTime.current * 1000 * difference);
		widget.current.seekTo(newPosition);
	}

	function formatTime(seconds) {
		const minutes = Math.floor(seconds / 60);
		const secondRest = seconds % 60;
		let minuteString;
		let secondString;
		if (minutes <= 9) {
			minuteString = "0" + minutes;
		} else {
			minuteString = "" + minutes;
		}
		if (secondRest <= 9) {
			secondString = "0" + secondRest;
		} else {
			secondString = "" + secondRest;
		}
		return minuteString + ":" + secondString;
	}

	useEffect(() => {
		async function loadWidgetAPI() {
			const iframe = document.getElementById("sc-widget");
			widget.current = new SoundcloudWidget(iframe);
		}
		loadWidgetAPI();
		widget.current.on(SoundcloudWidget.events.PLAY_PROGRESS, async function() {
			const currentTime = await getCurrentSongTime();
			const timeInSeconds = Math.floor(currentTime / 1000);
			if (!(timeInSeconds === currentSongTime.current)) {
				console.log(timeInSeconds);
				currentSongTime.current = timeInSeconds;
				setTime(timeInSeconds);
				const currentSongProgress = setProgressValue(currentSongTime.current);
				setSongProgress(currentSongProgress);
			}
		});
		widget.current.on(SoundcloudWidget.events.PLAY, async function() {
			const { title } = await widget.current.getCurrentSound();
			const duration = await widget.current.getDuration();
			setSongTitle(title);
			fullSongTime.current = Math.floor(duration / 1000);
			setSongDuration(Math.floor(duration / 1000));
			setPlaying(true);
		});
	}, []);
	return (
		<div className="audio-controller">
			<div className="playpause">
				{playing ? (
					<PauseButton
						pause={() => widget.current.pause()}
						handlePlayButton={handlePlayButton}
					/>
				) : (
					<PlayButton
						play={() => widget.current.play()}
						handlePlayButton={handlePlayButton}
					/>
				)}
			</div>
			<div className="song-info">
				<label onClick={handleWidgetClick}>{songTitle}</label>
				<progress
					onClick={seek}
					id="seek-obj"
					value={songProgress}
					max="1"
				></progress>
				<div className="song-duration">
					<label className="current-time">{formatTime(time)}</label>
					<label className="full-time">{formatTime(songDuration)}</label>
				</div>
			</div>
		</div>
	);
}

export default CustomPlayer;
