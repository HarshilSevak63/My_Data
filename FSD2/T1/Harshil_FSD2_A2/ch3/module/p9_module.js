exports.checkPrime=(x)=>{
    var flag=0;
    for(i=2;i<x;i++){
        if (x%i==0){
            flag++;
        } 
    }
    if (flag!=0){
        return false;
    }
    else{
        return true;
    }
}