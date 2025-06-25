import C4 from'./C4.jsx';
import { createContext } from 'react';
var s = {
    color: 'white', // Changed text color for better contrast
    fontSize: '24px', // Slightly increased font size
    backgroundColor: '#4CAF50', // A more professional green
    width: 'fit-content', // Adjust width to content, or a specific value
    padding: '15px 30px', // Added padding for better spacing
    borderRadius: '10px', // Rounded corners
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Subtle shadow
    fontFamily: 'Arial, sans-serif', // Changed font
    fontWeight: 'bold', // Made text bolder
    textAlign: 'center', // Aligns text inside the element to the center
    margin: '20px auto' // This is key for horizontal centering of the block element itself
};

var Styles=createContext();

function C3(){
    return(
    <>
    <Styles.Provider value={s}><C4/></Styles.Provider>
    </>
    );
}

export default C3;

export {Styles};