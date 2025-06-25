import axios from "axios";
import { useEffect, useState } from "react";

function Axiosd(){

    var [im,setimg]=useState(null);
    var [s,sets]=useState(null);
    var [p,setp]=useState(null);
    var [f,setf]=useState(null);


    // useEffect(()=>{axios
    //              .get('https://dog.ceo/api/breeds/image/random')
    //              .then((res)=>setimg(res.data.message))
    //              .catch((err)=>console.log(err))},[]);
    useEffect(changeImg,[]);


    function changeImg(){
    axios.get('https://dog.ceo/api/breeds/image/random').then((res)=>setimg(res.data.message)).catch((err)=>console.log(err));
    }


    useEffect(()=>{axios
                 .get('https://official-joke-api.appspot.com/random_joke')
                 .then((res)=>{sets(res.data.setup);setp(res.data.punchline)})
                 .catch((err)=>console.log(err))},[]);

    useEffect(()=>{setInterval(()=>axios
                 .get('https://catfact.ninja/fact')
                 .then((res)=>setf(res.data.fact))
                 .catch((err)=>console.log(err)),5000)},[]);
                 

    return(
        <>
        <img src={im} alt="no data" height={'200px'} width={'200px'}></img>
        <h1>Set Up - {s}</h1>
        <h2>punch line - {p}</h2>
        <h1>Facts - {f}</h1>

        <button onClick={changeImg}>Change Image</button>
        </>
    );
}

export default Axiosd;
