// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react';

function UsernameForm({ onSubmitUsername }) {

  const [username, setUsername] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitUsername(username);
  };

  const handleChange = (event) => {
    setUsername(event.target.value.toLowerCase());
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='username-input'>Username:</label>
        <input type="text" id='username-input' value={username} onChange={handleChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`);
  return <UsernameForm onSubmitUsername={onSubmitUsername} />;
}

export default App;
