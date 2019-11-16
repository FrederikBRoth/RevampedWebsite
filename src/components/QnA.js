import React, { useState, useEffect } from "react";
import { AllQuestions, AllAnswers } from "../apiCaller";

import Question from "./Question";

function QnA() {
	const [questions, setQuestions] = useState([]);
	const [answers, setAnswers] = useState([]);
	const [currentQuestion, setCurrentQuestion] = useState([]);

	useEffect(() => {
		async function getQnA() {
			const questionList = await AllQuestions();
			const answerList = await AllAnswers();
			setQuestions(questionList);
			setAnswers(answerList);
		}
		getQnA();
	}, []);

	return (
		<div>
			{questions.map((question, key) => {
				let questionAnswers = [];
				answers.forEach(answer => {
					if (answer.questionId === question._id) {
						questionAnswers = [...questionAnswers, answer];
					}
				});
				return (
					<Question
						question={question.question}
						answers={questionAnswers}
						key={key}
					/>
				);
			})}
		</div>
	);
}

export default QnA;
