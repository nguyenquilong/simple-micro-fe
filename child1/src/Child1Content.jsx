import React from "react";
import PubSub from 'pubsub-js';
import Pubsub1 from "./Pubsub1";
import { useEffect, useState } from 'react';

export default function Child1Content() {

 const handleClick = () => {
  PubSub.publish('message', 'Hello from Child1Content!');
};

  return (
    <div className="grid grid-cols-4 gap-5">
        <p>child1 content </p>
        <button onClick={handleClick}>Send message to B - gửi qua pubsub</button>
        <Pubsub1 />
    </div>
  );
}
