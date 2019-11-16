import React from "react";
import QnA from "../components/QnA";
function MainPage() {
	return (
		<main>
			<div className="maincontainer">
				<div className="websitetitle">
					<div className="title">
						<h1 className="textclip">FEDERICOSHYTTE</h1>
						<h2 className="textclip">Welcome faggot</h2>
					</div>
				</div>
				<div className="middlearea">
					<h2>Welcome to my amazing webpage!</h2>
					<br />
					<p>You will never not love this amazing site!</p>
					<br />
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
						sodales cursus nulla, eu bibendum justo imperdiet placerat. Nullam
						vel cursus mauris, id rhoncus est. Sed faucibus tortor scelerisque
						venenatis pellentesque. Vivamus fringilla bibendum libero, quis
						vehicula quam interdum vel. Nunc tincidunt lobortis sapien tincidunt
						sollicitudin. Integer tempus quam sed felis feugiat, non cursus
						augue egestas. Donec a massa quis ipsum ultricies lacinia a et
						dolor. Proin ac ante mattis, dictum nisl vel, facilisis velit. Nam
						sed gravida tortor. Donec ac condimentum odio. Ut accumsan ante ac
						imperdiet fringilla. Donec eu ultricies ligula. Aliquam sed nibh
						magna. Proin elementum augue et risus feugiat, vel blandit sem
						pharetra. Cras ex orci, ultricies vitae enim sed, dapibus ultricies
						erat. Nam ipsum lacus, blandit eget lacus at, tempus porttitor mi.
						Vestibulum mi enim, molestie sit amet finibus non, condimentum eget
						risus. Suspendisse congue nec elit vel sodales. Suspendisse tempus
						ipsum at feugiat sollicitudin. Suspendisse in leo nec lectus gravida
						finibus eget rhoncus erat. Curabitur vehicula porttitor sem, quis
						viverra arcu interdum ac. Curabitur vitae leo libero. In pulvinar
						tortor eu mauris varius, sed lacinia risus lobortis. Nunc lacinia
						pretium magna ut laoreet. Curabitur mi metus, dapibus sed neque
						vitae, lacinia fermentum sapien. Maecenas neque diam, fringilla id
						dui sed, eleifend molestie felis. Class aptent taciti sociosqu ad
						litora torquent per conubia nostra, per inceptos himenaeos. Donec
						sed odio elit. Cras ut dolor quis ante molestie faucibus. Lorem
						ipsum dolor sit amet, consectetur adipiscing elit. In lacinia
						ultrices nisi, ut malesuada quam bibendum vitae. Donec id magna
						suscipit, convallis orci sed, ultrices ligula.
					</p>
				</div>
				<div className="morememes">
					<h2>Question of the day!</h2>
					<QnA />
				</div>
				<div className="memes"></div>
			</div>
		</main>
	);
}

export default MainPage;
