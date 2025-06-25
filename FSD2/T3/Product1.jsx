import Pro2 from './Product2';
import F1 from './car.jpg';
function Pro1(){
var prod=[{pname:'shampoo',price:'$5000',pic:F1},
          {pname:'candy',price:'$50',pic:F1},
          {pname:'Hair color',price:'$100',pic:F1}];
    
    return (
        <>
        <Pro2 p={prod}/>
        </>
    );
}
export default Pro1;