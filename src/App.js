import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [input, setInput] = useState('');
  const [windowPreviewState, setWindowPreviewState] = useState([]);
  const [windowCurrState, setWindowCurrState] = useState([]);
  const [numbers, setNumbers] = useState([]);
  const [avg, setAvg] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:9876/numbers/${input}`);
      const { windowPreviewState, windowCurrState, numbers, avg } = response.data;
      setWindowPreviewState(windowPreviewState);
      setWindowCurrState(windowCurrState);
      setNumbers(numbers);
      setAvg(avg);
    } catch (error) {
      console.error('Error:', error.response.data.error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Number ID:
          <input type="text" value={input} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <h2>Window Preview State:</h2>
      <pre>{JSON.stringify(windowPreviewState, null, 2)}</pre>
      <h2>Window Current State:</h2>
      <pre>{JSON.stringify(windowCurrState, null, 2)}</pre>
      <h2>Numbers:</h2>
      <pre>{JSON.stringify(numbers, null, 2)}</pre>
      <h2>Average:</h2>
      <p>{avg}</p>
    </div>
  );
};

export default App;
