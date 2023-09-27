import { useState } from "react";
import "./Counter.css"
function Counter(){

    const [count,setCount] = useState(0)

    const incrementCounter = ()=>{
        if(count === 20){
            console.log(count);
            return
        }
        setCount(count + 1)
        console.log(count);
    }

    const decrementCounter = ()=>{
        if(count === 0){
            console.log(count);
            return
        }
        setCount(count - 1)
        console.log(count);
    }

    return (
        <>
            <h2 className="counter-h1" >Counter Value is : {count}</h2>
            <center><button className="inc-btn"  onClick={incrementCounter} >Increment Value</button></center>
            <center><button className="dec-btn"  onClick={decrementCounter} >Decrement Value</button></center>
        </>
    )
}

export default Counter