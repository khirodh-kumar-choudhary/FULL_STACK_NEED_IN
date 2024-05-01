// import React, { useState } from 'react';
// import axios from 'axios'; // Import axios library
// import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
// import useLocation from './useLocation';
// import './RegistrationForm.css';
// function EmployeeRegistration() {
//     const [employeename, setEmployeename] = useState("");
//     const [address, setAddress] = useState("");
//     const [mobile, setMobile] = useState("");
//     const [age, setAge] = useState("");
//     const [email, setEmail] = useState("");
//     const [emppassword , setEmppassword] = useState("");
//     const [skill, setSkill] = useState("");
//     const [gender, setGender] = useState("");
//     const [latitude, setLatitude] = useState("");
//     const [longitude, setLongitude] = useState("");
//     const location = useLocation(); // Using the useLocation hook
//     const [error, setError] = useState("");

//     // Function to handle form submission
//     async function save(event) {
//         event.preventDefault();
//         try {
//             // Check if any field is empty
//             if (!employeename || !address || !mobile || !age || !email || !skill || !gender || !latitude || !longitude) {
//                 setError("Please fill all fields");
//                 return;
//             }

//             // Perform your axios POST request here
//             const formData = {
//                 employeename,
//                 address,
//                 mobile,
//                 age,
//                 email,
//                 emppassword,
//                 skill,
//                 gender,
//                 latitude,
//                 longitude
//             };

//             await axios.post("http://localhost:5454/api/v1/employee/save", formData); // Send form data to the backend
//             alert("Employee Registration Successfully");

//             // Reset form fields after successful registration
//             setEmployeename("");
//             setAddress("");
//             setMobile("");
//             setAge("");
//             setEmail("");
//             setEmppassword("");
//             setSkill("");
//             setGender("");
//             setLatitude("");
//             setLongitude("");
//             setError("");
//         } catch (err) {
//             alert("Employee Registration Failed");
//         }
//     }

//     // Function to fetch location and update latitude and longitude
//     async function getLocation() {
//         try {
//             // Fetch location coordinates
//             const { coordinates } = await location;
//             setLatitude(coordinates.lat.toFixed(6)); // Limit latitude to 6 decimal places
//             setLongitude(coordinates.lng.toFixed(6)); // Limit longitude to 6 decimal places
//             setError("");
//         } catch (err) {
//             console.error("Error fetching location:", err);
//             setError("Error fetching location. Please try again.");
//         }
//     }

//     return (
//         <div className="container mt-4">
//             <form onSubmit={save}>
//                 <div className="form-group">
//                     <label>Name</label>
//                     <input type="text" className="form-control" placeholder="Enter Name"
//                         value={employeename}
//                         onChange={(event) => setEmployeename(event.target.value)}
//                     />
//                 </div>

//                 <div className="form-group">
//                     <label>Address</label>
//                     <input type="text" className="form-control" placeholder="Enter Address"
//                         value={address}
//                         onChange={(event) => setAddress(event.target.value)}
//                     />
//                 </div>

//                 <div className="form-group">
//                     <label>Mobile</label>
//                     <input type="text" className="form-control" placeholder="Enter Mobile"
//                         value={mobile}
//                         onChange={(event) => setMobile(event.target.value)}
//                     />
//                 </div>

//                 <div className="form-group">
//                     <label>Age</label>
//                     <input type="text" className="form-control" placeholder="Enter Age"
//                         value={age}
//                         onChange={(event) => setAge(event.target.value)}
//                     />
//                 </div>

//                 <div className="form-group">
//                     <label>Email</label>
//                     <input type="text" className="form-control" placeholder="Enter Email"
//                         value={email}
//                         onChange={(event) => setEmail(event.target.value)}
//                     />
//                 </div>


//                 <div className="form-group">
//                     <label>Password</label>
//                     <input type="text" className="form-control" placeholder="Enter password"
//                         value={emppassword}
//                         onChange={(event) => setEmppassword(event.target.value)}
//                     />
//                 </div>


//                 <div className="form-group">
//                     <label>Skill</label>
//                     <select className="form-control"
//                         value={skill}
//                         onChange={(event) => setSkill(event.target.value)}
//                     >
//                         <option value="">Select Skill</option>
//                         <option value="Electrician">Electrician</option>
//                         <option value="Plumber">Plumber</option>
//                         <option value="Homeapplication">Home Applicants</option>
//                         <option value="Homecleaning">Home Cleaning</option>
//                         <option value="Automobiles">AutoMobiles</option>
//                     </select>
//                 </div>

//                 <div className="form-group">
//                     <label>Gender</label>
//                     <select className="form-control"
//                         value={gender}
//                         onChange={(event) => setGender(event.target.value)}
//                     >
//                         <option value="">Select Gender</option>
//                         <option value="Male">Male</option>
//                         <option value="Female">Female</option>
//                         <option value="Other">Other</option>
//                     </select>
//                 </div>

//                 <div className="form-group">
//                     <label>Latitude</label>
//                     <input type="text" className="form-control" placeholder="Click on get location to get your latitude" value={latitude} readOnly />
//                 </div>

//                 <div className="form-group">
//                     <label>Longitude</label>
//                     <input type="text" className="form-control" placeholder="Click on get location to get your longitude" value={longitude} readOnly />
//                 </div>

//                 <button className="btn btn-primary mt-2" type="button" onClick={getLocation}>
//                     Get Location
//                 </button>

//                 <br></br>

//                 {error && <div className="alert alert-danger mt-2">{error}</div>} {/* Display error message */}

//                 <button className="btn btn-primary mt-4" type="submit">Register</button>
//             </form>
//         </div>
//     );
// }

// export default EmployeeRegistration;








// RegisterPage.js
// RegisterPage.js

import React, { useState } from 'react';
import axios from 'axios';
import useLocation from './useLocation';
import './RegistrationForm.css';

function RegisterPage() {
    const [registrationData, setRegistrationData] = useState({
        employeename: "",
        address: "",
        mobile: "",
        age: "",
        email: "",
        emppassword: "",
        skill: "",
        gender: "",
        latitude: "",
        longitude: ""
    });
    const [error, setError] = useState("");
    const location = useLocation(); // Using the useLocation hook

    const handleRegister = async (event) => {
        event.preventDefault();
        try {
            // Check if any field is empty
            if (!registrationData.employeename || !registrationData.address || !registrationData.mobile || !registrationData.age || !registrationData.email || !registrationData.skill || !registrationData.gender || !registrationData.latitude || !registrationData.longitude) {
                setError("Please fill all fields");
                return;
            }
    
            // Perform your axios POST request here
            await axios.post("http://localhost:5454/api/v1/employee/save", registrationData); // Send form data to the backend
            alert("Employee Registration Successfully");
    
            // Reset form fields after successful registration
            setRegistrationData({
                employeename: "",
                address: "",
                mobile: "",
                age: "",
                email: "",
                emppassword: "",
                skill: "",
                gender: "",
                latitude: "",
                longitude: ""
            });
            setError("");
        } catch (err) {
            console.error("Error during registration:", err);
            alert("Error during registration. Please try again."); // Display error alert
        }
    };


    const handleLogin= () => {
        window.location.href = './EmployeeForm';
    };

    // Function to fetch location and update latitude and longitude
    async function getLocation() {
        try {
            // Fetch location coordinates
            const { coordinates } = await location;
            setRegistrationData({
                ...registrationData,
                latitude: coordinates.lat.toFixed(6), // Limit latitude to 6 decimal places
                longitude: coordinates.lng.toFixed(6) // Limit longitude to 6 decimal places
            });
            setError("");
        } catch (err) {
            console.error("Error fetching location:", err);
            setError("Error fetching location. Please try again.");
        }
    }

    return (
        <div className="container mt-4">
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Enter Name"
                        value={registrationData.employeename}
                        onChange={(event) => setRegistrationData({ ...registrationData, employeename: event.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label>Address</label>
                    <input type="text" className="form-control" placeholder="Enter Address"
                        value={registrationData.address}
                        onChange={(event) => setRegistrationData({ ...registrationData, address: event.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label>Mobile</label>
                    <input type="text" className="form-control" placeholder="Enter Mobile"
                        value={registrationData.mobile}
                        onChange={(event) => setRegistrationData({ ...registrationData, mobile: event.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label>Age</label>
                    <input type="text" className="form-control" placeholder="Enter Age"
                        value={registrationData.age}
                        onChange={(event) => setRegistrationData({ ...registrationData, age: event.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" className="form-control" placeholder="Enter Email"
                        value={registrationData.email}
                        onChange={(event) => setRegistrationData({ ...registrationData, email: event.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password"
                        value={registrationData.emppassword}
                        onChange={(event) => setRegistrationData({ ...registrationData, emppassword: event.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label>Skill</label>
                    <select className="form-control"
                        value={registrationData.skill}
                        onChange={(event) => setRegistrationData({ ...registrationData, skill: event.target.value })}
                    >
                        <option value="">Select Skill</option>
                        <option value="Electrician">Electrician</option>
                        <option value="Plumber">Plumber</option>
                        <option value="Homeapplication">Home Applicants</option>
                        <option value="Homecleaning">Home Cleaning</option>
                        <option value="Automobiles">AutoMobiles</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Gender</label>
                    <select className="form-control"
                        value={registrationData.gender}
                        onChange={(event) => setRegistrationData({ ...registrationData, gender: event.target.value })}
                    >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Latitude</label>
                    <input type="text" className="form-control" placeholder="Click on get location to get your latitude" value={registrationData.latitude} readOnly />
                </div>
                <div className="form-group">
                    <label>Longitude</label>
                    <input type="text" className="form-control" placeholder="Click on get location to get your longitude" value={registrationData.longitude} readOnly />
                </div>
                <button className="btn btn-primary mt-2" type="button" onClick={getLocation}>
                    Get Location
                </button>
                <br />
                {error && <div className="alert alert-danger mt-2">{error}</div>}
                <button className="btn btn-primary mt-4" type="submit">Register</button>
                <button className="btn btn-primary" onClick={handleLogin}>Already Registered , Login</button>
            </form>
        </div>
    );
}

export default RegisterPage;
