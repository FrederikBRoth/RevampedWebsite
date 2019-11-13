import React, { Component, useState } from "react";
import Navbar from "./Navbar";
import menuLogo from "../img/menu.svg";

// import styled, { keyframes } from "styled-components";
// import { fadeIn} from "react-animations";

// const fadeInUpAni = keyframes`${fadeIn}`;

// const FadeinUpAni = styled.div`
// 	animation: 0.5s ${fadeInUpAni};
// `;
function Footer() {
	const [navbarOpen, setNavbarOpen] = useState(false);

	function handleClick() {
		setNavbarOpen(navbarOpen ? false : true);
		const navbar = document.getElementById("navbar-popup");
		navbar.classList.toggle("open-nav");
	}

	return (
		<div>
			<Navbar />
			<footer>
				<img src={menuLogo} alt="menuicon" onClick={handleClick} />

				<label>Menu</label>
			</footer>
		</div>
	);
}

export default Footer;
