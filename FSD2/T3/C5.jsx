import { useContext } from "react";
import { Styles } from "./C3";
import { Data } from "./C4";


function C5(){
    return(
    <>
    <h1 style={useContext(Styles)}>{useContext(Data)}</h1>
    </>
    );
}

export default C5;