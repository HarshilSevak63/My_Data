import { useContext } from "react";
import { Msg } from "./Parent.jsx";
import { Msg2 } from "./Parent.jsx";

function C2(p){
    return(
    <>
    {/* <h1 style={{color:'red'}}> Message - {p.m}</h1> */}
    <h1> Message - {useContext(Msg)} {useContext(Msg2)}</h1>
    </>
    );
}

export default C2;