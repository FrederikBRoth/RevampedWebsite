import React from "react";

export const PlayButton = props => {
	return (
		<svg
			viewBox="0 0 40 45"
			version="1.1"
			id="svg8"
			className="audio-button"
			onClick={props.play}
		>
			<path
				id="path815"
				d="m 36.068,20.176 -29,-20 C 6.761,-0.035 6.363,-0.057 6.035,0.114 5.706,0.287 5.5,0.627 5.5,0.999 v 40 c 0,0.372 0.206,0.713 0.535,0.886 0.146,0.076 0.306,0.114 0.465,0.114 0.199,0 0.397,-0.06 0.568,-0.177 l 29,-20 c 0.271,-0.187 0.432,-0.494 0.432,-0.823 0,-0.329 -0.162,-0.636 -0.432,-0.823 z M 7.5,39.095 V 2.904 L 33.739,21 Z"
			/>
		</svg>
	);
};

export const PauseButton = props => {
	return (
		<svg className="audio-button" viewBox="0 0 42 42" onClick={props.pause}>
			<path d="M14.5,0c-0.552,0-1,0.447-1,1v40c0,0.553,0.448,1,1,1s1-0.447,1-1V1C15.5,0.447,15.052,0,14.5,0z" />
			<path d="M27.5,0c-0.552,0-1,0.447-1,1v40c0,0.553,0.448,1,1,1s1-0.447,1-1V1C28.5,0.447,28.052,0,27.5,0z" />
		</svg>
	);
};
