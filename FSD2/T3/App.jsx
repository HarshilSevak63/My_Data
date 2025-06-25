import './App.css';
// import Hello from './Hello.jsx';
// import Rules from './Rules.jsx';
// import P1 from './P1.jsx';
// import Map from './Map.jsx';
// import Filter from './Filter.jsx';
// import P2 from './P2.jsx';
// import Prop1 from './Prop1.jsx';
// import P3 from './P3.jsx';
// import Pro1 from './Product1';
// import Ma from './Main.jsx';
// import T1 from './Task1.jsx';
// import Hs from './Hstate.jsx';
// import IncDec from './Inc_Dec.jsx';
// import Img from './Img_change.jsx';
// import Hs1 from './Hstate1.jsx';
// import Hs2 from './Hstate2.jsx';
// import To_do from './To_do.jsx';
// import Hr from './HReduce.jsx';
// import Parent from './Parent.jsx';
// import C3 from './C3.jsx';
// import He from './Heffect.jsx';
// import Axid from './Axiosd.jsx';
// import To from './To_do_List.jsx';
// import Uf from './Ufrom.jsx';
import D1 from './D1.jsx';
import D2 from './D2';
import D3 from './D3';
import { BrowserRouter, Route, Routes } from "react-router-dom";



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<D1 />} />
          <Route path="/D2" element={<D2 />} />
          <Route path="/D3" element={<D3 />} />
          {/* <Route path="*" element={}/> */}

        </Routes>
      </BrowserRouter>
      {/* <D1 /> */}
    </>
  );
}


export default App;
