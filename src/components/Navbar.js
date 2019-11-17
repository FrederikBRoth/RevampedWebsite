import React from "react";
import PageLink from "./PageLink";
function Navbar(props) {
	return (
		<div className="navbar-popup" id="navbar-popup">
			<PageLink path="/" text="Homepage" handleClick={props.handleClick} />
			<PageLink
				path="/answerquestion/"
				text="Answer Questions"
				handleClick={props.handleClick}
			/>
			<PageLink path="/login/" text="Login" handleClick={props.handleClick} />
			<PageLink
				path="/register/"
				text="Register"
				handleClick={props.handleClick}
			/>
		</div>
	);
}

export default Navbar;
