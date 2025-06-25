// // Create a form with multiple input fields whose value is displayed in real time using single useState
// import { useState } from "react";

// function Hstate2(){

//     var[fdata,setData]=useState({});


//     function chg(e){
//         setData({...fdata,[e.target.name]:e.target.value});
//     }

//     return(
//         <>
//         <form>
//             First Name:
//             <input type="text" placeholder="First Name" name="fname" onChange={chg}/>
//             <br/>
//             Last Name:
//             <input type="text" placeholder="Last Name" name="lname" onChange={chg}/>
//             <br/>
//             <input type="radio" name='gender' value={'Male'} onChange={chg}/>Male
//             <input type="radio" name='gender' value={'Female'} onChange={chg}/>Female
//             <br/>
//             <textarea name='tarea' rows={2} cols={10} onChange={chg} placeholder="Message"></textarea>
//             <br/>
//             <input type="submit"/>
//         </form>
//         <h2>First Name: {fdata.fname}</h2>
//         <h2>Last Name: {fdata.lname}</h2>
//         <h2>Gender: {fdata.gender}</h2>
//         <h2>Meassage: {fdata.tarea}</h2>
//         </>
//     );
// }

// export default Hstate2;


import { useState } from "react";

function Hstate2() {
  // Initialize fdata as an empty object to store form field values
  const [fdata, setData] = useState({});

  function chg(e) {
    const { name, value } = e.target;
    setData({ ...fdata, [name]: value });
  }

  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      padding: '20px',
      maxWidth: '1000px', // Increased max-width to accommodate two columns
      margin: '30px auto',
      border: '1px solid #ccc',
      borderRadius: '8px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      backgroundColor: '#f9f9f9',
      display: 'flex', // Enable flexbox for the main container
      gap: '30px' // Space between the form and data display
    }}>

      {/* Left Column: Form */}
      <div style={{ flex: 1, paddingRight: '20px', borderRight: '1px solid #eee' }}>
        <h2 style={{ color: '#333', textAlign: 'center', marginBottom: '25px', borderBottom: '2px solid #eee', paddingBottom: '10px' }}>User Information Form</h2>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="fname" style={{ minWidth: '120px', fontWeight: 'bold', color: '#555', fontSize: '0.95em' }}>First Name:</label>
            <input
              type="text"
              id="fname"
              placeholder="Enter First Name"
              name="fname"
              onChange={chg}
              value={fdata.fname || ''}
              style={{ flex: 1, padding: '10px', border: '1px solid #ddd', borderRadius: '5px', fontSize: '1em' }}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <label htmlFor="lname" style={{ minWidth: '120px', fontWeight: 'bold', color: '#555', fontSize: '0.95em' }}>Last Name:</label>
            <input
              type="text"
              id="lname"
              placeholder="Enter Last Name"
              name="lname"
              onChange={chg}
              value={fdata.lname || ''}
              style={{ flex: 1, padding: '10px', border: '1px solid #ddd', borderRadius: '5px', fontSize: '1em' }}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <label style={{ minWidth: '120px', fontWeight: 'bold', color: '#555', fontSize: '0.95em' }}>Gender:</label>
            <div style={{ display: 'flex', gap: '20px' }}>
              <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', color: '#666' }}>
                <input
                  type="radio"
                  name='gender'
                  value={'Male'}
                  onChange={chg}
                  checked={fdata.gender === 'Male'}
                  style={{ marginRight: '8px' }}
                />
                Male
              </label>
              <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', color: '#666' }}>
                <input
                  type="radio"
                  name='gender'
                  value={'Female'}
                  onChange={chg}
                  checked={fdata.gender === 'Female'}
                  style={{ marginRight: '8px' }}
                />
                Female
              </label>
              <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', color: '#666' }}>
                <input
                  type="radio"
                  name='gender'
                  value={'Others'}
                  onChange={chg}
                  checked={fdata.gender === 'Others'}
                  style={{ marginRight: '8px' }}
                />
                Others
              </label>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <label htmlFor="tarea" style={{ fontWeight: 'bold', color: '#555', marginBottom: '8px', fontSize: '0.95em' }}>Message:</label>
            <textarea
              name='tarea'
              id="tarea"
              rows={4}
              onChange={chg}
              placeholder="Type your message here..."
              value={fdata.tarea || ''}
              style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '5px', resize: 'vertical', minHeight: '80px', fontSize: '1em' }}
            ></textarea>
          </div>

          <button
            type="submit"
            style={{ padding: '12px 25px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '1em', fontWeight: 'bold', alignSelf: 'flex-end', marginTop: '10px', transition: 'background-color 0.3s ease' }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007bff'}
          >
            Submit
          </button>
        </form>
      </div>

      {/* Right Column: Real-time Data Display */}
      <div style={{ flex: 1, paddingLeft: '20px' }}>
        <h2 style={{ color: '#333', textAlign: 'center', marginBottom: '25px', borderBottom: '2px solid #eee', paddingBottom: '10px' }}>Real-time Data Display</h2>
        <div style={{ backgroundColor: '#fff', padding: '15px', borderRadius: '6px', border: '1px solid #eee', boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.05)' }}>
          <p style={{ margin: '8px 0', fontSize: '1.1em', color: '#666' }}>
            <strong>First Name:</strong> <span style={{ color: '#28a745', fontWeight: 'bold' }}>{fdata.fname || 'N/A'}</span>
          </p>
          <p style={{ margin: '8px 0', fontSize: '1.1em', color: '#666' }}>
            <strong>Last Name:</strong> <span style={{ color: '#28a745', fontWeight: 'bold' }}>{fdata.lname || 'N/A'}</span>
          </p>
          <p style={{ margin: '8px 0', fontSize: '1.1em', color: '#666' }}>
            <strong>Gender:</strong> <span style={{ color: '#28a745', fontWeight: 'bold' }}>{fdata.gender || 'N/A'}</span>
          </p>
          <p style={{ margin: '8px 0', fontSize: '1.1em', color: '#666' }}>
            <strong>Message:</strong> <span style={{ color: '#28a745', fontWeight: 'bold' }}>{fdata.tarea || 'N/A'}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hstate2;