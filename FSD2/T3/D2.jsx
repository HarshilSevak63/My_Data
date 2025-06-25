import { createContext, useState } from "react";
import { Theme } from "./D1"
import { useContext } from "react";
// import D3 from './D3';

var Msg = createContext()

function D2() {
    var t = useContext(Theme)
    var [d, setd] = useState('');

    function chg(e) {
        setd(e.target.value);
    }


    return (
        <>
            Theme
            {t}


            <Msg.Provider value={d}>
                Message : <input type="text" name='msg' required onChange={chg} />
                <button style={{ marginLeft: '5px', backgroundColor: 'white' }}>
                    <a href="/D3" style={{ textDecoration: 'none', color: 'black' }}>
                        Next
                    </a>
                </button>
            </Msg.Provider>
        </>
    );
}

export default D2;
export { Msg }