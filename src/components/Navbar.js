import React, { Component } from "react";
import PageLink from "./PageLink";
function Navbar() {
	return (
		<div className="navbar-popup" id="navbar-popup">
			<PageLink path="/" text="home" />
			<PageLink path="/meme/" text="memes" />
		</div>
	);
}

export default Navbar;
