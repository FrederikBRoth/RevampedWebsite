import React from "react";
import QnA from "../components/QnA";

import "../stylesheets/MainpageStyle.css";
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
						Klokken er 23:34 om natten og kulden har trukket over Slagelse by. I
						en lille lejlighed syd for bymidten sidder der en dreng. Drengen
						stirre dybt ind i skærmen og rykker sig ikke ud af flækken. Der er
						død stille, det eneste man kan høre i baggrunden er en konstant
						tasten på et mekanisk tastatur, vinden udenfor og ekstremt højt
						hentai i hovedtelefoner.
					</p>
					<br />
					<p>
						Pludselig vænder han sig om, og han har noget i hånden. Hvad kan det
						mund være. En cola? Kat? Pikkemand? Ingen ide. Det eneste jeg ved er
						at jeg i hvertfald ikke skal være forfatter for for satan var det
						det størte bunke lort. No shit jeg fik 02 i dansk. Hvem fuck skriver
						også historier? Like lev i nuet og spil noget computer i stedet din
						fucking taber.
					</p>
				</div>
				<div className="qna-area" id="qna-area">
					<QnA />
				</div>
				<div className="memes"></div>
			</div>
		</main>
	);
}

export default MainPage;
