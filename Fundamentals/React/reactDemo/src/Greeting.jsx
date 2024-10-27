import React from 'react';

function Greeting({ name }) {
  const getGreetingMessage = () => {
    const currentHour = new Date().getHours();
    
    if (currentHour < 12) {
      return 'Good Morning';
    } else if (currentHour < 18) {
      return 'Good Afternoon';
    } else {
      return 'Good Evening';
    }
  };

  return <h2>{getGreetingMessage()}, {name}!</h2>;
}

export default Greeting;
