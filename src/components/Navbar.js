import React, { Component } from "react";
import PageLink from "./PageLink";
function Navbar(props) {
	return (
		<div className="navbar-popup" id="navbar-popup">
			<PageLink path="/" text="home" handleClick={props.handleClick} />
			<PageLink path="/meme/" text="memes" handleClick={props.handleClick} />
		</div>
	);
}

export default Navbar;
