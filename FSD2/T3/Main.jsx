import {BrowserRouter,Link,Routes,Route} from 'react-router-dom';
import Home from './Home.jsx';
import Contact from './Contact.jsx';
import Pro1 from './Product1.jsx';
import Events from './Events.jsx';

function Main1(){
    return(
        <>
        
        <BrowserRouter>
        <Link to='/'>Home</Link>
        <br/>
        <Link to='/Contact'>Contact Us</Link>
        <br/>
        <Link to='/Product'>Product Details</Link>
        <br/>
        <Link to='/Events'>Events</Link>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='/Product' element={<Pro1/>}/>
            <Route path='/Events' element={<Events/>}/>
        </Routes>
        </BrowserRouter>
        </>
    );
}

export default Main1;