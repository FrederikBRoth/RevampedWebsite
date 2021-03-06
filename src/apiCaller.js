const apiPath = "https://federicoshytte.dk";

const postHeader = {
	"Content-Type": "application/json"
};

export async function AllQuestions() {
	let response = await fetch("/api/qna/getquestions");
	let data = await response.json();
	return data;
}

export async function AllAnswers() {
	let response = await fetch("/api/qna/getanswers");
	let data = await response.json();
	return data;
}

export async function Login(username, password) {
	let response = await fetch("/api/account/login", {
		method: "post",
		headers: postHeader,
		body: JSON.stringify({
			username,
			password
		})
	});
	if (!response.ok) {
		throw new Error(response.statusText);
	}
	let data = await response.json();
	return data;
}

export async function Register(username, password, email) {
	let response = await fetch("/api/account/register", {
		method: "post",
		headers: postHeader,
		body: JSON.stringify({
			email,
			username,
			password
		})
	});
	if (!response.ok) {
		throw new Error(response.statusText);
	}
	let data = await response.text();
	return data;
}

export async function CheckSession() {
	let response = await fetch(
		"/api/account/checklogin",
		{
			credentials: "include"
		}
	);
	let data = await response.json();
	return data;
}

export async function Logout() {
	let response = await fetch("/api/account/logout", {
		credentials: "include"
	});
	let data = response.text();
	return data;
}

export async function PostAnswer(answer, sender, questionId) {
	let response = await fetch("/api/qna/postanswer", {
		method: "post",
		headers: postHeader,
		body: JSON.stringify({
			answer,
			sender,
			questionId
		})
	});
	if (!response.ok) {
		throw new Error(response.statusText);
	}
	let data = await response.text();
	return data;
}
