// Create 3 btn change text, change color, hide/show
// Add heading lj university in red color and 'react js hooks in h2 tag'
// Clicking on btn1 change text to welcome students and viseversa
// By clicking btn2 red color changes to blue and viseversa using double click
// Initialy btn3 should have text hide when clicked hide react js hooks (h2 tag) and change btn text to show and visecersa

import { useState } from "react";

function Hstate1(){

    var x='LJ Univrsity';
    var y='Welcome Student';

    const[c,setColor]=useState('red');
    const[t,settxt]=useState('Hide');
    const[d,setDisplay]=useState('block');
    const[data,setData]=useState(x);

    function Color(){
        setColor('blue');

        if(c==='blue'){
            setColor('red');
        }
    }

    function Display(){
        if (t==='Hide'){
            setDisplay('none');
            settxt('Show');
        }
        else{
            setDisplay('block');
            settxt('Hide');
        }
    }

    function Data(){
        if (data===x){
            setData(y);
        }
        else{
            setData(x)
        }
    }
    
    return(
        <>
        <h1 style={{color:c}}>{data}</h1>
        <h2 style={{display:d}}>React JS hooks</h2>
        <button onClick={Data}>Change text</button>
        <button onDoubleClick={Color}>Change color</button>
        <button onClick={Display}>{t}</button>

        </>
    );
}

export default Hstate1;