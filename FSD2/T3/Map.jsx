function Map(){
    var arr1=['a,b,c,d'];
    var arr2=[1,3,6,4,5,8];
    return(
        <>
        {
            arr1.map((x) =>
                <h1>
                    Upper: {x.toUpperCase()}
                </h1>
            )
            
        }

        {
            arr2.map((y) =>{
                if (y>4)
                    return <h1>Mapped No: {y}</h1>
                else
                    return false
                }
            )
        }
        </>
    );
}
export default Map;