import React from "react";

function Question(props) {
	function getDate(string) {
		const date = new Date(string);
		return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
	}
	return (
		<div className="question" id="question">
			<div className="question-title">
				<div className="question-navbar">
					<div className="question-icon-container">
						<svg
							className="question-icon"
							onClick={props.handleClick}
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 60 60"
						>
							<path d="m 28.944882,0.94488192 c -15.439,0 -28.00000008,12.56100008 -28.00000008,28.00000008 0,15.439 12.56100008,28 28.00000008,28 15.439,0 28,-12.561 28,-28 0,-15.439 -12.561,-28.00000008 -28,-28.00000008 z m 0,54.00000008 c -14.337,0 -26.0000001,-11.664 -26.0000001,-26 0,-14.336 11.6630001,-26.0000001 26.0000001,-26.0000001 14.337,0 26,11.6640001 26,26.0000001 0,14.336 -11.663,26 -26,26 z m 12,-38 h -24 c -0.553,0 -1,0.448 -1,1 0,0.552 0.447,1 1,1 h 24 c 0.553,0 1,-0.448 1,-1 0,-0.552 -0.447,-1 -1,-1 z m 0,11 h -24 c -0.553,0 -1,0.448 -1,1 0,0.552 0.447,1 1,1 h 24 c 0.553,0 1,-0.448 1,-1 0,-0.552 -0.447,-1 -1,-1 z m 0,11 h -24 c -0.553,0 -1,0.448 -1,1 0,0.552 0.447,1 1,1 h 24 c 0.553,0 1,-0.448 1,-1 0,-0.552 -0.447,-1 -1,-1 z" />
						</svg>
					</div>
				</div>
				<h1>Question of the day!</h1>
				<div className="question-block">
					<h3>{props.question}</h3>
				</div>
				<hr />
				<br />
			</div>
			<div className="answers">
				{props.answers.map((answer, key) => {
					return (
						<div className="answer-block" key={key}>
							<p>{answer.answer}</p>
							<br />
							<div className="answer-info">
								<label>{answer.sender}</label>
								<label>{getDate(answer.date)}</label>
							</div>
						</div>
					);
				})}
				<label>Submit answers by going to the menu!</label>
			</div>
		</div>
	);
}

export default Question;
