// Create 2 text boxs to enter numbers and a button that displays addition of numbers in console and also in h1 tag
function Task1(){
    var sum=0;
    function add(e){
        alert(`Sum: ${parseInt(document.getElementById('t1').value)+parseInt(+document.getElementById('t2').value)}`);
        console.log(`Sum: ${parseInt(document.getElementById('t1').value)+parseInt(+document.getElementById('t2').value)}`);
        sum=parseInt(document.getElementById('t1').value)+parseInt(+document.getElementById('t2').value);
        document.getElementById('c').innerText=sum;
    }
    return(
        <>
        <input type="text" id='t1'/>
        <br/>
        <input type='text' id="t2"/>
        <br/>
        <button onClick={add}>Add</button>
        <h1>Result is: {sum}</h1> {/* sum is updated but browser is not refreshed */}
        <h1 id='c'>Result is: {sum}</h1> {/* not to use */}
        </>
    );
}
export default Task1;