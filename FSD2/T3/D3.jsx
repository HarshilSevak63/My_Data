import { Theme } from "./D1"
import { Msg } from "./D2"
import { useContext } from "react";
function D3() {
    var t = useContext(Theme);
    var m = useContext(Msg);
    return (
        <>
            {t}
            {m}
            <h1 style={{ backgroundColor: t === "light" ? "pink" : "red", color: t === "light" ? "red" : "pink" }}>
                {m}
            </h1>
        </>
    );
}

export default D3;