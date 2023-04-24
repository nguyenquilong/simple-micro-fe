import React, { useState, useEffect } from "react";


export default function ShareContent(props) {

  const [propData, getProp] = useState(props.data)
  
  console.log('props', props)

  console.log('propData', propData)


  useEffect(() => {
  }, []);

  return (
    <div className="grid grid-cols-4 gap-5">
        Share Content From child1 {propData}
    </div>
  );
}
