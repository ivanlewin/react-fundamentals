// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react';

function UsernameForm({ onSubmitUsername }) {

  const [username, setUsername] = React.useState('');
  const isAllLowercase = username.toLowerCase() === username;
  const error = isAllLowercase ? null : 'Username must be lower case';

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitUsername(username);
  };

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='username-input'>Username:</label>
        <input type="text" id='username-input' value={username} onChange={handleChange} />
        {error ? <p role='alert' style={{ color: 'red' }}>{error}</p> : null}
      </div>
      <button disabled={!isAllLowercase} type="submit">Submit</button>
    </form>
  );
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`);
  return <UsernameForm onSubmitUsername={onSubmitUsername} />;
}

export default App;
