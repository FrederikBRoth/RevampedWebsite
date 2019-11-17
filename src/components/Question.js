import React from "react";

function Question(props) {
	return (
		<div className="question" id="question">
			<h1>Question of the day!</h1>
			<button onClick={props.handleClick}>test123</button>
			<div className="question-block">
				<h3>{props.question}</h3>
			</div>
			<hr />
			<br />
			{props.answers.map((answer, key) => {
				return (
					<div className="answer-block">
						<p key={key}>{answer.answer}</p>
					</div>
				);
			})}
		</div>
	);
}

export default Question;
