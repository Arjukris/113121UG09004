import React, { useState } from 'react';

function MyComponent() {
  const [response, setResponse] = useState('');

  const postData = async () => {
    const url = 'http://20.244.56.144/test/register';
    const data = {
      "companyName": "goMart",
      "ownerName": "Arju",
      "rollNo": "1",
      "ownerEmail": "arjugopalakrishnan@gmail.com",
      "accessCode": "yqlhcX"
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      
      const responseData = await response.json();
      setResponse(responseData); // Update state with response data
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <button onClick={postData}>Send POST Request</button>
      <div>Response: {response}</div>
    </div>
  );
}

export default MyComponent;