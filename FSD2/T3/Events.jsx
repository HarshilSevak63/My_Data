function Events(){

    function clk(){
        alert('Clicked');
    }

    function sb(e){
        e.preventDefault(); // should be written in exam
        alert('You submitted from');
    }
    function st(e){
        console.log(e.target.value);
        // console.log(e.target); //whole textarea tag is printed

        e.target.style.backgroundColor='yellow';
    }

    return(
        <>
        <h1>Events</h1>
        {/* 
        1. onClick
        2. onDoubleClick
        3. onSubmit
        4. onChange 
        */}
        <form onSubmit={sb} action='https://www.google.com'>
        <button type='button' onClick={clk} style={{backgroundColor:'lightblue',color:'black',border:'1px solid black',borderRadius:'5px'}}>Click Me</button>
        <br/>
        <button type="submit" onClick={clk} style={{backgroundColor:'lightblue',color:'black',border:'1px solid black',borderRadius:'5px'}}>Submit</button>
        <br/>
        <input type='submit'/> {/* for google link*/}
        <br/>
        <textarea rows={5} cols={10} onChange={st}></textarea>
        <br/>
        <button type='button' onDoubleClick={()=> alert('You clicked twice')} style={{backgroundColor:'lightblue',color:'black',border:'1px solid black',borderRadius:'5px'}}>Double click</button>
        </form>
        </>
    );
}

export default Events;