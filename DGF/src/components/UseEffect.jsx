import {useEffect, useState} from 'react'

function UseEffect() {

    const[count,setCount]=useState(0);
  
    useEffect(()=>{

        <><h4>`You click ${count} times`</h4></>
    },[count])
  
  
    return (
    <div>
    <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Click {count} times{" "}
    </button>
</div>
    )
}

export default UseEffect