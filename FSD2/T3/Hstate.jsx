import { useState } from "react";

function Hstate(){

    const [c,setCount]=useState(0);
    const [sum,Add]=useState(0);

    // c -> name of variable of useState (its state can only be updated by setCount function)
    // setCount -> name of function
    // initial value of c is given in useState(0[here])

    function up(){
        setCount(c+1);
    };

    function add(e){
        Add(sum+(parseInt(document.getElementById('n1'))+parseInt(document.getElementById('n2'))));
    }
    return(
        <>
            <h1>count is: {c}</h1>
            <button onClick={up}>Increment</button>

            <h1>Addition Code</h1>

             <input type="text" id='n1'/>
            <br/>
            <input type='text' id='n2'/>
            <br/>
            <button onClick={add}>Add</button>
            <h1 id='c'>Result is: {sum}</h1>
        </>
    );
}
export default Hstate;
