import React from 'react'
import { Link,useHistory } from "react-router-dom";

const Navbar = () => {
    const location = useHistory();
    const handleClick = () =>{
        localStorage.removeItem('authenticationToken');
        location.push('/login');
    }
    return (
        <div>
             <div className="headerContainer">
                <header>
                    <h1>Hello Rakshit</h1>
                </header>
                <div className="navbar">
                    <nav className="menu">
                        <Link to="/">Home</Link>
                        <Link to="/signup">About</Link>
                    </nav>
                    <div className="message">Useful message</div>
                    <nav className="subMenu">
                        <button onClick={handleClick}>Logout</button>
                        <button><Link to = "/login">Login</Link></button>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navbar
