import {useState} from 'react'

export default function Counter() {

const[count,setCount]=useState(0);

    const increment=()=>{
        setCount(count+1);
    };

  return (
    <div>Counter
        <h1>Counter:{count}</h1>
        <button onClick={increment}>Increment</button>
    </div>
  )
}

