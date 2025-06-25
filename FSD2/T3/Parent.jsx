import C1 from './C1.jsx';
import { createContext } from 'react';

var Msg=createContext();
var Msg2=createContext();

function Parent(){
    return(
    <>
    {/* <C1 msg="nuclear codes are 1234" /> */}
    <Msg.Provider value={'nuclear codes are 5678'}>
        <C1 />
    </Msg.Provider>
    <Msg2.Provider value={'some message'}>
        <C1 />
    </Msg2.Provider>
    </>
    );
}

export default Parent;
export {Msg};
export {Msg2};