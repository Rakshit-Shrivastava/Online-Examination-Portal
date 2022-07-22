import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

const Signup = () => {

    const [selection, setselection] = useState('');

    const [credentials, setcredentials] = useState({ name: '', branch: '', course: '', email: '', phone: '', password: '', });
    let location = useHistory();
    let route = "";
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if(selection===1){
            route = "http://localhost:5000/api/authentication/createUser/teacher";
        }else{
            route = "http://localhost:5000/api/authentication/createUser/student";
        }
        const response = await fetch(route, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name: credentials.name, rollno: credentials.rollno, enroll: credentials.enroll, semester: credentials.semester, email: credentials.email, branch: credentials.branch, course: credentials.course, phone: credentials.phone, password: credentials.password, flag: selection })
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            localStorage.setItem('authenticationToken', json.authenticationToken);
            location.push('/login');
        } else {
            alert('Wrong credendials');
        }
    }

    const handleChange = (event) => {
        setcredentials({ ...credentials, [event.target.name]: event.target.value });
    }

    return (
        <div className="signup">
            <div className="selection">
                <h1>I am a </h1>
                <input type="radio" id="teacher" name="selection" value={1} onChange={(event) => { setselection(event.target.value) }} />
                <label htmlFor="teacher">Teacher</label>
                <input type="radio" id="student" name="selection" value={0} onChange={(event) => { setselection(event.target.value) }} />
                <label htmlFor="student">Student</label>
            </div>
            <div className="abc">
                <div className="signup_form">
                    <form onSubmit={handleSubmit}>
                        <ul>
                            <li>
                                <label htmlFor="name">Name</label>
                                <input type="text" name='name' id='name' onChange={handleChange} />
                            </li>
                            {selection === '0' ? <>
                                <li>
                                    <label htmlFor="enroll">Enrollment no.</label>
                                    <input type="text" name='enroll' id='enroll' onChange={handleChange} />
                                </li>
                                <li>
                                    <label htmlFor="rollno">Roll no.</label>
                                    <input type="text" name='rollno' id='rollno' onChange={handleChange} />
                                </li>
                                <li>
                                    <label htmlFor="semester">Semester</label>
                                    <input type="text" name='semester' id='semester' onChange={handleChange} />
                                </li>
                            </> : ''}
                            <li>
                                <label htmlFor="branch">Branch</label>
                                <input type="text" name='branch' id='branch' onChange={handleChange} />
                            </li>
                            <li>
                                <label htmlFor="course">Course</label>
                                <input type="text" name='course' id='course' onChange={handleChange} />
                            </li>
                            <li>
                                <label htmlFor="email">Email</label>
                                <input type="text" name='email' id='email' onChange={handleChange} />
                            </li>
                            <li>
                                <label htmlFor="phone">Phone</label>
                                <input type="number" name='phone' id='phone' onChange={handleChange} />
                            </li>
                            <li>
                                <label htmlFor="password">Password</label>
                                <input type="text" name='password' id='password' onChange={handleChange} />
                            </li>
                            <li>
                                <label htmlFor="cpassword">Confirm password</label>
                                <input type="text" name='cpassword' id='cpassword' onChange={handleChange} />
                            </li>
                            <li>
                                <p>Already have an account! <Link to="/login">Login</Link></p>
                                <button>Submit</button>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup
