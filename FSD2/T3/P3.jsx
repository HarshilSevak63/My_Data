// Given an array of cars, display only name of car and model of car on another component page

import Prop3 from './Prop3.jsx';

function P3(){
    var car=[{nc:'AUDI',model:'Q8',color:'black',price:70000},
              {nc:'Ferrari',model:'F90',color:'red',price:900000},
              {nc:'Rolls-Royce',model:' la viriato droptail',color:'silver',price:20000000}];
    return(
        <>
        <Prop3 cars={car}/>
        {/* <Prop3 nc='abc' color='green'/> */}
        </>
    );
}

export default P3;