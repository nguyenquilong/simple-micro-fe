import React from "react";
import PubSub from 'pubsub-js';
import { useEffect, useState } from 'react';

export default function Pubsub1() {

 const [message, setMessage] = useState('');

 useEffect(() => {
  const token = PubSub.subscribe('message', (_, data) => {
    setMessage(data);
  });

  return () => {
    console.log(token)
  };
}, []);

  return (
    <div className="grid grid-cols-4 gap-5">
        <p>pubsub content </p>
        <p>{JSON.stringify(message)}</p>
    </div>
  );
}
