import React from 'react';
import { Link } from "react-router-dom";

const ProfileStudent = () => {
    return (
        <div className='profileStudent'>
            <div className="profileStudent_form">
                <form action="">
                    <ul>
                        <li>
                            <label htmlFor="">Name</label>
                            <input type="text" />
                        </li>
                        <li>
                            <label htmlFor="">Roll no.</label>
                            <input type="text" />
                        </li>
                        <li>
                            <label htmlFor="">Enroll no.</label>
                            <input type="text" />
                        </li>
                        <li>
                            <label htmlFor="">Course</label>
                            <input type="text" />
                        </li>
                        <li>
                            <label htmlFor="">Branch</label>
                            <input type="text" />
                        </li>
                        <li>
                            <label htmlFor="">Semester</label>
                            <input type="text" />
                        </li>
                        <li>
                            <label htmlFor="">Phone</label>
                            <input type="text" />
                        </li>
                        <li>
                            <label htmlFor="">Email</label>
                            <input type="text" />
                        </li>
                        <li>
                            <button>Submit</button>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    )
};

export default ProfileStudent;
