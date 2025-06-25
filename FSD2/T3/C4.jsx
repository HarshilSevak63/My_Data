import C5 from'./C5.jsx';
import { createContext } from 'react';

var Data=createContext();

function C4(){
    return(
    <>
    <Data.Provider value={'Ganne ka juice, bada glass 20 Rs.'}><C5/></Data.Provider>
    </>
    );
}

export default C4;

export {Data};