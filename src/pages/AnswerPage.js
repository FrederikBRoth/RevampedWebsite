import React, { useState, useEffect } from "react";
import { AllQuestions, PostAnswer } from "../apiCaller";
import { Link } from "react-router-dom";

function AnswerPage(props) {
	const [questions, setQuestions] = useState([]);
	const [currentQuestion, setCurrentQuestion] = useState({});
	const [answer, setAnswer] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	function handleChange(event) {
		const { value, name } = event.target;
		if (name === "answer") {
			setAnswer(value);
		}
	}

	function handleClick() {
		const questionmenu = document.getElementById("post-questionmenu");
		const answerwindow = document.getElementById("login-register-form");
		questionmenu.classList.toggle("open-postquestionmenu");
		answerwindow.classList.toggle("move-answerwindow");
	}

	async function handleAnswer(event) {
		event.preventDefault();
		try {
			const data = await PostAnswer(
				answer,
				props.user.username,
				currentQuestion._id
			);
			console.log(data);
			setErrorMessage("Answer submitted successfully!");
			setAnswer("");
		} catch (error) {
			setErrorMessage(error.message);
		}
	}

	useEffect(() => {
		async function getQuestions() {
			const data = await AllQuestions();
			setQuestions(data);
			setCurrentQuestion(data[0]);
		}
		getQuestions();
	}, []);

	return (
		<div className="login-register-container">
			<div
				className="post-questionmenu"
				id="post-questionmenu"
				onClick={handleClick}
			>
				{questions.map((question, key) => {
					return (
						<div key={key} onClick={() => setCurrentQuestion(question)}>
							<label>{question.question}</label>
						</div>
					);
				})}
			</div>
			<div className="login-register-form" id="login-register-form">
				<h1 onClick={handleClick}>Answer Question!</h1>
				<h2>{currentQuestion.question}</h2>
				<div className="login-register-inputs">
					<form onSubmit={handleAnswer}>
						<h2>Answer!</h2>
						<br />
						<textarea
							className="answer-area"
							type="answer"
							name="answer"
							placeholder="Input Password!"
							value={answer}
							onChange={handleChange}
						/>
						<button name="submit" hidden={true} />
					</form>
					<div className="login-register-buttons">
						<button name="login" onClick={handleAnswer}>
							Post Answer!
						</button>
						<label>{errorMessage}</label>
						<Link to="/">
							<button name="login">Go back</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AnswerPage;
