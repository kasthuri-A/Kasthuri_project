import React, { useState } from "react";
import "./Login.css";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      alert("Please fill all fields");
    } else {
      alert("Login Successful!");
    }
  };

  return (
    <div className="login-container">

      <div className="login-box">

        <h1>Skill Gap Analyzer</h1>

        <p>Login to analyze your skills</p>

        <form onSubmit={handleLogin}>

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">
            Login
          </button>

        </form>

        <p className="register-text">
          Don't have an account? <span>Register</span>
        </p>

      </div>

    </div>
  );
}

export default Login;