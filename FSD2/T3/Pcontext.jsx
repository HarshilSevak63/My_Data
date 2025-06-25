//  Use multiple context in react by creating and cosuming them across different components
// c3 -> creates context for css styling and provides it to c5
// c4 -> creates a context for string value and provides to c5
// c5 -> comsumes both text and css and displays given message with given styling

import C3 from'./C3.jsx';
import { useContext } from 'react';

function Pcontext(p){
    return(
    <>
    </>
    );
}

export default Pcontext;