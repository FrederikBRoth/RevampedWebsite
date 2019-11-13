import React, { Component, useState } from "react";
import Navbar from "./Navbar";
import menuLogo from "../img/menu.svg";

function Footer() {
	const [navbarOpen, setNavbarOpen] = useState(false);

	function handleClick() {
		setNavbarOpen(navbarOpen ? false : true);
	}

	return (
		<footer>
			<img src={menuLogo} alt="menuicon" onClick={handleClick} />
			<label>Menu</label>
			{navbarOpen ? <Navbar /> : null}
		</footer>
	);
}

export default Footer;
