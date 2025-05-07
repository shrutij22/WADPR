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
