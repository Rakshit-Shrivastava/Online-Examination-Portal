import React from 'react'
import { useContext} from 'react';
import detailContext from './Context/personalDetail/detailContext';
const DisplayDetails = () => {
    const context = useContext(detailContext);
    const { details, setDetails } = context;
    return (
        <div>
            <ul>
                <li>
                    <label htmlFor="">Name</label>
                    <input type="text" readOnly value={details.name}/>
                </li>
                <li>
                    <label htmlFor="">Roll no.</label>
                    <input type="text" readOnly value={details.rollno} />
                </li>
                <li>
                    <label htmlFor="">Enroll no.</label>
                    <input type="text" readOnly value={details.enroll} />
                </li>
                <li>
                    <label htmlFor="">Course</label>
                    <input type="text" readOnly value={details.course} />
                </li>
                <li>
                    <label htmlFor="">Branch</label>
                    <input type="text" readOnly value={details.branch} />
                </li>
                <li>
                    <label htmlFor="">Semester</label>
                    <input type="text" readOnly value={details.semester} />
                </li>
                <li>
                    <label htmlFor="">Phone</label>
                    <input type="text" readOnly value={details.phone} />
                </li>
                <li>
                    <label htmlFor="">Email</label>
                    <input type="text" readOnly value={details.email} />
                </li>
            </ul>
        </div>
    )
}

export default DisplayDetails