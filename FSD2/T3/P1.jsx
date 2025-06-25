// Create a react comp that displays
// 1. a heading with is bold,70px,having blue color and aqua background.
// 2. display 2 images 1 from public folder other from src
// 3. display only current date in h2 tag and only current time in h3 tag
import pic1 from './F1.jpg';


function P1(){
    var date=new Date().toDateString();
    var time=new Date().toLocaleTimeString();
    return(
        <>

        <h1 style={{fontSize:'70px', fontStyle:'bold',color:'blue',backgroundColor:'aqua'}}>
            Heading
        </h1>

        <img src={pic1} alt='F1'></img>
        <img src='./logo192.png' alt='React'></img>

        <h3>Date: {date}</h3>
        <h3>Time: {time}</h3>


        </>
    );
}
export default P1;