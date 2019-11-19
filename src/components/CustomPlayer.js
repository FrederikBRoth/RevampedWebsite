import React, { useRef, useEffect, useState } from "react";
import { PlayButton, PauseButton } from "../stylesheets/svgs/SvgCaller";

import SoundcloudWidget from "soundcloud-widget";
function CustomPlayer() {
	const widget = useRef();
	const currentSongTime = useRef();
	const [time, setTime] = useState(0);
	function handleWidgetClick() {
		const scEmbed = document.getElementById("soundcloud-embed");
		scEmbed.classList.toggle("open-soundcloud");
	}

	async function getCurrentSongTime() {
		const time = await widget.current.getPosition();
		return time;
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
			}
		});
	}, []);
	return (
		<div className="audio-controller">
			<div className="playpause">
				<PlayButton play={() => widget.current.play()} />
				<PauseButton pause={() => widget.current.pause()} />
			</div>
			<label onClick={handleWidgetClick}>Test123</label>
			<label>{formatTime(time)}</label>
		</div>
	);
}

export default CustomPlayer;
