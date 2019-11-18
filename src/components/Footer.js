import React, { useState } from "react";
import Navbar from "./Navbar";
import "../stylesheets/FooterStyle.css";
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
		<div>
			<Navbar handleClick={handleClick} />
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
				{!props.checkLoggedIn() ? (
					<div className="footer-right">
						<label>Login</label>
					</div>
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
