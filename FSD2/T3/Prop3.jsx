function Prop3(p){
    return (
        <>
        <h1>Cars Details</h1>
        {
             p.cars.map((v)=>
                <>
                <h3>Car Name: {v.nc}, Car Model: {v.model}, Car Color: {v.color}, Car Price: {v.price}</h3>
                </>                    
            )
        }
        </>  
    )
}

export default Prop3;