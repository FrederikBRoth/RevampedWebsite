import React from "react";
import { Link } from "react-router-dom";
function PageLink(props) {
	return (
		<Link style={{ textDecoration: "none" }} to={props.path}>
			<div className="linkcontainer" onClick={props.handleClick}>
				<p>{props.text}</p>
			</div>
		</Link>
	);
}

export default PageLink;
