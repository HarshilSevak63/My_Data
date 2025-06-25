import { useState } from 'react';
import './Form.css'; // Assuming you have a Form.css file in the same directory

function Uform() {
    // Initialize formData with empty strings for all fields, including gender
    var [fdata, setdata] = useState({
        username: '',
        email: '',
        city: '',
        password: '',
        confirmPassword: '',
        gender: '' // Added gender to initial state
    });

    // Universal change handler for all form inputs
    function chg(e) {
        setdata({ ...fdata, [e.target.name]: e.target.value });
    }

    // Submission handler with validation
    function sub(e) {
        e.preventDefault(); // Prevent default form submission behavior

        // Check if all required text/select fields are filled
        if (!fdata.username || !fdata.email || !fdata.city || !fdata.password || !fdata.confirmPassword || !fdata.gender) {
            alert('All fields are Required!');
            return; // Stop the function if validation fails
        }

        // Password length validation
        if (fdata.password.length < 8) { // Changed to < 8 as per common practice, user said "greater than 8"
            alert('Password must be at least 8 characters long.');
            return;
        }

        // Password match validation
        if (fdata.password !== fdata.confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        // If all validations pass
        alert(
            `Submitted Successfully!\n` +
            `User-Name: ${fdata.username}\n` +
            `Email: ${fdata.email}\n` +
            `City: ${fdata.city}\n` +
            `Gender: ${fdata.gender}`
        );

        // Optional: Clear form after successful submission
        setdata({
            username: '',
            email: '',
            city: '',
            password: '',
            confirmPassword: '',
            gender: ''
        });
    }

    return (
        <div className="form-container">
            <form className="registration-form" onSubmit={sub}> {/* Moved onClick from button to onSubmit on form */}
                <h2>User Form</h2>

                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={fdata.username || ''} // Connect value to state
                        onChange={chg} // Add onChange handler
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={fdata.email || ''} // Connect value to state
                        onChange={chg} // Add onChange handler
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="city">City:</label>
                    <select
                        id="city"
                        name="city"
                        value={fdata.city || ''} // Connect value to state
                        onChange={chg} // Add onChange handler
                        required
                    >
                        <option value="">Select your city</option>
                        <option value="Ahmedabad">Ahmedabad</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="Chennai">Chennai</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={fdata.password || ''} // Connect value to state
                        onChange={chg} // Add onChange handler (was on label before)
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={fdata.confirmPassword || ''} // Connect value to state
                        onChange={chg} // Add onChange handler (was on label before)
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Gender:</label>
                    <div className="radio-group">
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="male"
                                checked={fdata.gender === 'male'} // Connect checked to state
                                onChange={chg} // Add onChange handler
                                required
                            />
                            Male
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="gender"
                                value="female"
                                checked={fdata.gender === 'female'} // Connect checked to state
                                onChange={chg} // Add onChange handler
                                required
                            />
                            Female
                        </label>
                    </div>
                </div>

                <button type="submit" className="submit-button">Register</button>
            </form>
        </div>
    );
}

export default Uform;