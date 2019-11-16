export async function AllQuestions() {
	let response = await fetch("http://localhost:3000/qna/getquestions");
	let data = await response.json();
	return data;
}
