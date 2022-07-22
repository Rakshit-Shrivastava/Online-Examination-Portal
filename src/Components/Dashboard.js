import React, {useEffect} from 'react';
import { Link, useHistory } from "react-router-dom";
import TimeTable from './TimeTable';
import DisplayDetails from './DisplayDetails';

const Dashboard = () => {
    const location = useHistory();

    useEffect(()=>{
        if(!localStorage.getItem('authenticationToken')){
            location.push('/login');
        }
    })
    
    return (
        <div>
            <div className="bodyContainer">
                <div className="sideBar">
                    <li><Link to="/">Dashboard</Link></li>
                    <li><Link to="/">Result</Link></li>
                    <li><Link to="/">Upcoming Exam</Link></li>
                    <li><Link to="/createexam">Create Exam</Link></li> 
                    <li><Link to="/createtimetable">Create Timetable</Link></li> 
                    <li><Link to="/showtimetable">Show Timetable</Link></li> 
                    <li><Link to="/showquestion">Show Question</Link></li> 
                </div>
                <div className="contentArea">
                    <div className="contentBox contentBox1">
                        <DisplayDetails/>
                    </div>
                    <div className="contentBox contentBox2">
                        <h3>Time table</h3>
                        {/* <TimeTable/> */}
                    </div>
                    <div className="contentBox contentBox3">
                        <h3>Today's Exam</h3>
                        Cryptography
                        <button className='startBtn'><Link to="/exampage">Start</Link></button>
                    </div>
                    <div className="contentBox contentBox4">
                        <h3>Upcoming Exam</h3>
                        Parallel processing and applications
                    </div>
                    <div className="contentBox contentBox6">
                        <h3>Previous Exam Result</h3>
                        Pending...
                    </div>
                    <div className="contentBox contentBox6">
                        <h3>Previous Exam Papers</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
