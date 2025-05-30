//8.	Create a program of react JS using React hooks (any one)	

import React, { useState } from 'react';

function App() {
  // Declare state variable 'count' and a function 'setCount' to update it
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>React Counter App 🚀</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default App;
//process to run this 
// use npx-my-react-app folder_name (folder should be empty)
// cd folder_name

// replace app.js contents 

// npm start
