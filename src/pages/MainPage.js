import React, { Component } from "react";
import Footer from "../components/Footer";
function MainPage() {
	return (
		<main>
			<div class="maincontainer">
				<div class="websitetitle">
					<div class="title">
						<h1 class="textclip">Welcome to Federicoshytte!</h1>
						<h2 class="textclip">An amazing place to be!</h2>
					</div>
				</div>
				<div class="middlearea"></div>
				<div class="morememes"></div>
				<div class="memes"></div>
			</div>

			<Footer />
		</main>
	);
}

export default MainPage;
