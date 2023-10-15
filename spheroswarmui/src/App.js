import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function App() {
  const [username, setUsername] = useState('');
  const [password] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  // Assume you have a login function for handling user authentication
  const handleLogin = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
  };

  return (
      <BrowserRouter>
        <div className="App">
          <div className="login-container">
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={handleUsernameChange}
                    required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    required
                />
              </div>
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
