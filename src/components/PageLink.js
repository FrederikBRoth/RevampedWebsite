import React, { useState } from "react";
import { Link } from "react-router-dom";
function PageLink(props) {
	return (
		<Link to={props.path}>
			<p>{props.text}</p>
		</Link>
	);
}

export default PageLink;
