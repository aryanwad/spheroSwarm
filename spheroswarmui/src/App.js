import React, { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Add your login logic here, e.g., sending a request to a server.

    // Reset the input fields after submission
    setUsername('');
    setPassword('');
  };

  return (
      <div className="App">
        <div className="login-container">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
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
                  onChange={handlePasswordChange}
                  required
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
  );
}

export default App;
