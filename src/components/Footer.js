import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import "../stylesheets/FooterStyle.css";

import CustomPlayer from "./CustomPlayer";
// import styled, { keyframes } from "styled-components";
// import { fadeIn} from "react-animations";

// const fadeInUpAni = keyframes`${fadeIn}`;

// const FadeinUpAni = styled.div`
// 	animation: 0.5s ${fadeInUpAni};
// `;
function Footer(props) {
	const [navbarOpen, setNavbarOpen] = useState(false);

	function handleClick() {
		setNavbarOpen(navbarOpen ? false : true);
		const navbar = document.getElementById("navbar-popup");
		navbar.classList.toggle("open-nav");
	}

	return (
		<div classname="footercontainer">
			<Navbar handleClick={handleClick} />
			<div className="soundcloud-embed" id="soundcloud-embed">
				<iframe
					id="sc-widget"
					title="soundcloud"
					scrolling="no"
					frameBorder="no"
					allow="autoplay"
					src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/398571716&color=d98de7&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=false&visual=true"
				></iframe>
			</div>
			<footer>
				<div className="footer-left">
					<svg
						className="nav-icon"
						onClick={handleClick}
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 60 60"
					>
						<path d="m 28.944882,0.94488192 c -15.439,0 -28.00000008,12.56100008 -28.00000008,28.00000008 0,15.439 12.56100008,28 28.00000008,28 15.439,0 28,-12.561 28,-28 0,-15.439 -12.561,-28.00000008 -28,-28.00000008 z m 0,54.00000008 c -14.337,0 -26.0000001,-11.664 -26.0000001,-26 0,-14.336 11.6630001,-26.0000001 26.0000001,-26.0000001 14.337,0 26,11.6640001 26,26.0000001 0,14.336 -11.663,26 -26,26 z m 12,-38 h -24 c -0.553,0 -1,0.448 -1,1 0,0.552 0.447,1 1,1 h 24 c 0.553,0 1,-0.448 1,-1 0,-0.552 -0.447,-1 -1,-1 z m 0,11 h -24 c -0.553,0 -1,0.448 -1,1 0,0.552 0.447,1 1,1 h 24 c 0.553,0 1,-0.448 1,-1 0,-0.552 -0.447,-1 -1,-1 z m 0,11 h -24 c -0.553,0 -1,0.448 -1,1 0,0.552 0.447,1 1,1 h 24 c 0.553,0 1,-0.448 1,-1 0,-0.552 -0.447,-1 -1,-1 z" />
					</svg>
					<label>Menu</label>
				</div>

				{/* <button onClick={handleWidgetClick}>open</button>
					<button onClick={() => widget.current.play()}>play</button>
					<button onClick={() => widget.current.pause()}>pause</button> */}
				<CustomPlayer />

				{!props.checkLoggedIn() ? (
					<Link to="/login">
						<div className="footer-right">
							<label>Login</label>
						</div>
					</Link>
				) : (
					<div className="footer-right" onClick={() => props.logoutUser()}>
						<label>{props.user.username}</label>
						<label>Logout</label>
					</div>
				)}
			</footer>
		</div>
	);
}

export default Footer;
