const apiPath = "http://localhost:3000";

export async function AllQuestions() {
	let response = await fetch(apiPath + "/api/qna/getquestions");
	let data = await response.json();
	return data;
}

export async function AllAnswers() {
	let response = await fetch(apiPath + "/api/qna/getanswers");
	let data = await response.json();
	return data;
}
