import React from "react";

function Question(props) {
	return (
		<div className="question">
			<p>{props.question}</p>
			<br />
			{props.answers.map((answer, key) => {
				return <p key={key}>{answer.answer}</p>;
			})}
		</div>
	);
}

export default Question;
