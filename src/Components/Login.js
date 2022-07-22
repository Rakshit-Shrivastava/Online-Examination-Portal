import React, {useState} from 'react';
import { Link, useHistory } from "react-router-dom";

const Login = () => {

    const [credentials, setcredentials] = useState({email : '', password: ''});
    let location = useHistory();

    const handleSubmit = async (event) =>{
        event.preventDefault();
        const response = await fetch("http://localhost:5000/api/authentication/login", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
          });
          const json = await response.json();
          console.log(json);
          if(json.success){
              localStorage.setItem('authenticationToken', json.authenticationToken);
              location.push('/');
          }else{
              alert('Wrong credendials');
          }
    }

    const handleChange = (event) =>{
        setcredentials( {...credentials, [event.target.name]: event.target.value});
    }

    return (
        <div className='login center'>
            <div className="login_form"><br />
            <form onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <label htmlFor="email">Email</label>
                        <input type="text" name='email' id='email' value={credentials.email} onChange={handleChange}/>
                    </li>
                    <li>
                        <label htmlFor="password">Password</label>
                        <input type="text" name='password' id='password' value={credentials.password} onChange={handleChange}/>
                    </li>
                    <li>
                        <p>Don't have an account? <Link to= "/signup">Sign up</Link></p>
                        <button>Submit</button>
                    </li>
                </ul>
            </form>
            </div>
        </div>
    )
}

export default Login
