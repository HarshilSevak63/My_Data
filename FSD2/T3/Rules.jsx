import pic from'./F1.jpg';

function Rules(){
    var uname='Harshil';
    var obj={color:'purple',backgroundColor:'pink',fontWeight:'bold',fontSize:'30px'};
    return(
        <>
    {
    /* 1. Comments must be enclosed between {} */
    }

    {
    // 2. All data must be inside single element
    }

    {
    // 3. All Tags must be closed
    }
    A
    <br/>
    <hr/>
    B

    {
    // 4. Use camelCase insted of - or space.
    }
    <h2 className="mytxt">Hading-2</h2>

    {
    // 5. Variables/Expressions are written in {}
    }
    <h2>10*5={10*5}</h2>
    <h1>My name is: {uname}</h1>
    <img src={pic} alt='Red bull F1 car'></img>

    {
    // 6. Inline css uses {{}}
    }

    <div style={obj}>
        Hello World!
    </div>

    OR

    <div style={{color:'purple',backgroundColor:'pink',fontWeight:'bold',fontSize:'30px'}}>
        Hello World!
    </div>
    
    </>
);
}

export default Rules;