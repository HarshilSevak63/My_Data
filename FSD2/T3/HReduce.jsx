import { useReducer } from "react";

function HReducer() {

    var [count,setCount]=useReducer(red,0);
    var [no,setno]=useReducer(red1,20);

    function red(count,setCount){
        if (setCount.type==='inc'){
            return (++count);
        }
        else{
            return (--count);
        }
    }

    function red1(no,setno){
        return (no+setno);
    }
    return(
        <>
        <h1>Count is: {count}</h1>
        <button onClick={()=>setCount({type:'inc'})}>Increment</button>
        <button onClick={()=>setCount({type:'dec'})}>Decrement</button>
        <h1>No is: {no}</h1>
        <button onClick={()=>setno(5)}>Increment by 5</button>
        </>
    );
}

export default HReducer;