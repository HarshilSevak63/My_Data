import { createContext, useState } from 'react';
// import D2 from './D2';

var Theme = createContext();

function D1() {
    var [t, sett] = useState('dark');

    function chg(e) {
        sett(e.target.value)
    }

    return (
        <>

            <Theme.Provider value={t}>
                <div>
                    <select onChange={chg}>--Theme--
                        <option selected disabled hidden>Select Theme</option>
                        <option value='light'>Light</option>
                        <option value='dark'>Dark</option>
                    </select>
                    <button style={{ marginLeft: '5px', backgroundColor: 'white' }}><a href="/D2" style={{ textDecoration: 'none', color: 'black' }}>Next</a></button>
                </div>
            </Theme.Provider>
        </>
    );
}

export default D1;
export { Theme };