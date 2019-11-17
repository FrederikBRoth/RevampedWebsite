import React, { useState, useEffect } from "react";
import { AllQuestions, AllAnswers } from "../apiCaller";

import Question from "./Question";

function QnA() {
	const [questions, setQuestions] = useState([]);
	const [answers, setAnswers] = useState([]);
	const [currentQuestion, setCurrentQuestion] = useState({});

	function handleClick() {
		const questionmenu = document.getElementById("question-answers");
		questionmenu.classList.toggle("open-questionmenu");
	}

	function getAnswers() {
		let questionAnswers = [];
		answers.forEach(answer => {
			if (answer.questionId === currentQuestion._id) {
				questionAnswers = [...questionAnswers, answer];
			}
		});
		return questionAnswers;
	}

	function setFixedWidth() {
		const questionmenu = document.getElementById("qna-area");
		const positionInfo = questionmenu.getBoundingClientRect();
		const width = positionInfo.width;
		const questionWindow = document.getElementById("question");
		questionWindow.style.width = width + "px";
	}

	function removeFixedWidth() {
		const questionWindow = document.getElementById("question");
		questionWindow.style.width = "100%";
	}

	useEffect(() => {
		async function getQnA() {
			const questionList = await AllQuestions();
			const answerList = await AllAnswers();
			setQuestions(questionList);
			setAnswers(answerList);
			setCurrentQuestion(questionList[0]);
		}
		getQnA();
		const questionWindow = document.getElementById("question-answers");
		questionWindow.addEventListener("transitionstart", setFixedWidth, false);
		questionWindow.addEventListener("transitionend", removeFixedWidth, false);
	}, []);

	return (
		<div>
			<div className="questionmenu" id="questionmenu">
				{questions.map((question, key) => {
					return (
						<div
							key={key}
							onClick={() => {
								handleClick();
								setCurrentQuestion(question);
							}}
						>
							<p>{question.question}</p>
						</div>
					);
				})}
			</div>
			<div className="question-answers" id="question-answers">
				<Question
					handleClick={handleClick}
					question={currentQuestion.question}
					answers={getAnswers()}
				/>
			</div>
		</div>
	);
}

export default QnA;
