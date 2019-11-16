import React, { useState, useEffect } from "react";
import { AllQuestions } from "../apiCaller";

function Questions() {
	const [questions, setQuestions] = useState([]);

	function test() {
		questions.map(question => {
			return <p>{question}</p>;
		});
	}

	useEffect(() => {
		async function getQuestions() {
			const questionList = await AllQuestions();
			setQuestions(questionList);
		}
		getQuestions();
	}, []);
	return (
		<div>
			{questions.map(question => {
				return <p>{question.question}</p>;
			})}
		</div>
	);
}

export default Questions;
