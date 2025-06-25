function P2(){
    var arr3=[{s:'A',r:5,m:20},
              {s:'B',r:38,m:24},
              {s:'C',r:50,m:23}];
    return(
       <>
        <table border={1}>
            <tr>
                <th>Name</th>
                <th>Rollno</th>
                <th>Mark</th>
            </tr>
        {
            arr3.map((x,i)=>{
                return <tr key={i}>
                        <td key={i+1}>{x.s}</td>
                        <td key={i+1}>{x.r}</td>
                        <td key={i+1}>{x.m}</td>
                    </tr>
            })
        }
        </table>
        {
            arr3.map((v,i)=><h1 key={i}>{v.s}</h1>)
        }

        {
            arr3.filter((x)=>(x.m>20)).map((v)=><h1>Name of scholers: {v.s}</h1>)
        }
        </>
    );
}
export default P2;