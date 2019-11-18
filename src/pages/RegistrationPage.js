import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "../stylesheets/LoginRegisterStyle.css";
import { Register } from "../apiCaller";
function RegistrationPage() {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [repeatPassword, setRepeatPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");

	function handleChange(event) {
		const { name, value } = event.target;
		switch (name) {
			case "username":
				setUsername(value);
				break;
			case "email":
				setEmail(value);
				break;
			case "password":
				setPassword(value);
				break;
			case "repeatPassword":
				setRepeatPassword(value);
				break;
			default:
		}
	}

	function samePassword() {
		if (password === repeatPassword) {
			return true;
		} else {
			return false;
		}
	}

	async function handleRegister(event) {
		if (samePassword()) {
			try {
				event.preventDefault();
				const data = await Register(username, password, email);
			} catch (error) {
				setErrorMessage(error.message);
			}
		}
	}

	return (
		<div className="login-register-container">
			<div className="login-register-form">
				<h1>Login!</h1>
				<div className="login-register-inputs">
					<form onSubmit={handleRegister}>
						<h2>Email:</h2>
						<input
							type="email"
							name="email"
							placeholder="Input Email!"
							value={email}
							onChange={handleChange}
						/>
						<h2>Username:</h2>
						<input
							type="text"
							name="username"
							placeholder="Input Username!"
							value={username}
							onChange={handleChange}
						/>
						<h2>Password:</h2>
						<input
							type="password"
							name="password"
							placeholder="Input Password!"
							value={password}
							onChange={handleChange}
						/>
						<h2>Repeat Password:</h2>
						<input
							type="password"
							name="repeatPassword"
							placeholder="Input Password Again"
							value={repeatPassword}
							onChange={handleChange}
						/>

						<button name="submit" hidden={true} />
					</form>
					<div className="login-register-buttons">
						<button name="login" onClick={handleRegister}>
							Register
						</button>
						<label>
							{samePassword() ? errorMessage : "Passwords dont match!"}
						</label>

						<Link to="/login">
							<button name="login">Login</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
export default RegistrationPage;
