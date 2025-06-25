function Filter(){
    var arr2=[1,3,6,4,5,8];
    var ma=[];
    return(
        <>
        
        {
            ma=arr2.filter((x)=> x>4)
        }
        <h1>Filtered Array: {ma.join(',')}</h1>
        </>
    );
}
export default Filter;