//-------------------------------------------useEffect(function/callback,dependencies)------------------------------------------------

import { useEffect, useState } from "react";

function Heffect(){

    var [H,setH]=useState('Hello');
    var [count,setCount]=useState(0);

    // useEffect(()=>alert("I'm called for all stages"));
    // useEffect(()=>alert("I'm called only on mount"),[]);
    useEffect(()=>alert("I'm called when count changes"),[count]);
    // useEffect(()=>alert("I'm called when count,H changes"),[count,H]);


    return(
        <>
        <button onClick={()=>
            setH('Good Morning Anna')
        }>Change text - {H}</button>
        <button onClick={()=>{
            setCount(++count)
        }}>Count - {count}</button>
        </>
    );
}

export default Heffect;