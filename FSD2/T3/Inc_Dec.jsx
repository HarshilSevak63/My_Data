import { useState } from "react";

function Inc_Dec(){

    const [c,setCount]=useState(0);

    function up(){
        if (c<10){
         setCount(c+1);
         console.log(c);
        }
        else{
            alert('Cannot Increment!!')
        }
    };

    function down(){
        if (c>0){
         setCount(c-1);
        console.log(c);

        }
        else{
            alert('Cannot Decrement!!')
        }
    }
    return(
        <>
        <h1>Count is: {c}</h1>
        <button onClick={up}>Increment</button>
        <button onClick={down}>Decrement</button>
        </>
    );
}

export default Inc_Dec;