import { useState } from "react";
import i1 from './car.jpg';
import f1 from './F1(1).jpg';
import f2 from './F1(2).jpg';
import f3 from './F1(3).jpg';
import f4 from './F1(4).jpg';
import f5 from './F1(5).jpg';


function Img_change(){

    const[Img,setImg]=useState(i1);
    const[Img2,setImg2]=useState(f1);

    function change(){
        if (Img===i1){
            setImg(f1);
        }
        else{
            setImg(i1);
        }
    }

    function changeRandom(){
        var imgs=[f1,f2,f3,f4,f5];
        var im=Math.floor(Math.random()*imgs.length);
        setImg2(imgs[im]);
    }
    return(
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' ,flexDirection:'column',gap:'5px'}}>
            <img src={Img} onClick={change} alt="Img" />
            <img src={Img2} onClick={changeRandom} alt="Img" />
        </div>

    );
}

export default Img_change;