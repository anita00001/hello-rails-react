import React from 'react';
import { useSelector } from 'react-redux';
 const Greeting = () => {
    const greeting = useSelector((state) => state.greetings.message);

  return (
    <div>{greeting}</div>
  )
}

export default Greeting