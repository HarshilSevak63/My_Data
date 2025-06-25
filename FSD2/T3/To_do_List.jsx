import { useState } from "react";

function To_do_List(){

    var [data,setdata]=useState('');
    var [tlist,setlist]=useState([]);

    function chg(e){
        setdata(e.target.value);
    }

    function addData(){
        if(data!==''){
            setlist([...tlist,data]);
            setdata('');
        }
        else{
            alert('Enter Data.....');
        }
    }
    function rem(indexToRemove){
        setlist(tlist.filter((_, index) => index !== indexToRemove));
    }
    return(
        <div style={{fontFamily: 'Arial, sans-serif', maxWidth: '500px', margin: '20px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', backgroundColor: '#f9f9f9'}}>
            <h1 style={{textAlign: 'center', color: '#333', marginBottom: '25px'}}>My To-Do List</h1>
            <label style={{display: 'flex', alignItems: 'center', marginBottom: '20px', fontSize: '1.1em', color: '#555'}}>
                Enter Task:
                <input 
                    type='text' 
                    placeholder="Enter data" 
                    onChange={chg} 
                    value={data}
                    style={{flexGrow: '1', padding: '10px', border: '1px solid #ddd', borderRadius: '4px', marginLeft: '10px', marginRight: '5px', fontSize: '1em'}}
                />
                <button 
                    style={{padding: '10px 15px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '1.1em', transition: 'background-color 0.3s ease'}}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#218838'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#28a745'}
                    onClick={addData}
                >
                    +
                </button>
            </label>
            {
                tlist.length === 0 ? 
                <p style={{textAlign: 'center', color: '#777', fontSize: '1.1em'}}>No tasks yet. Add some!</p> :
                tlist.map((l, index)=>
                    <div key={index} style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid #eee'}}>
                        <p style={{margin: '0', fontSize: '1.15em', color: '#333', wordBreak: 'break-word'}}>{l}</p> 
                        <button 
                            style={{padding: '6px 12px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '1em', transition: 'background-color 0.3s ease'}} 
                            onMouseOver={(e) => e.target.style.backgroundColor = '#c82333'}
                            onMouseOut={(e) => e.target.style.backgroundColor = '#dc3545'}
                            onClick={() => rem(index)}
                        >
                            -
                        </button>
                    </div>
                )
            }
        </div>
    );
}

export default To_do_List;





// import { useState } from "react";

// function To_do_List(){

//     var [data,setdata]=useState('');
//     var [tlist,setlist]=useState([]);

//     function chg(e){
//         setdata(e.target.value);
//     }

//     function addData(){
//         setlist([...tlist,data]);
//     }
//     function rem(indexToRemove){
//         setlist(tlist.filter((v, index) => index !== indexToRemove));
//     }
//     return(
//         <>
//         <h1>To do List</h1>
//         <input type='text' placeholder="Enter data" onChange={chg} required/>
//         <button style={{marginLeft:'5px'}} onClick={addData}>+</button>
//         {
//             tlist.map((l,id)=>
//                 <div key={id}>
//                     <h1>{l} <button style={{marginLeft:'5px'}} onClick={()=>rem(id)}>-</button></h1>
//                 </div>
//                      )
//         }
//         </>
//     );
// }

// export default To_do_List;