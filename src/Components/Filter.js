import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Filter = (props) => {
  const [branch, setbranch] = useState('default');
  const [semester, setsemester] = useState('default');
  const [subject, setsubject] = useState('default');
  let location = useLocation();
  useEffect(()=>{
  },[location])
  return (
    <div className="showFilter">
      <form action="" onSubmit={(event) => { event.preventDefault() }}>
        <div>
          <label htmlFor="branch">Branch</label>
          <select name="branch" id="branch" defaultValue={branch} onChange={(event) => setbranch(event.target.value)}>
            <option value="default" disabled hidden>
              Choose a branch
            </option>
            <option value="CSE">CSE</option>
            <option value="CIVIL">CIVIL</option>
            <option value="MECHANICAL">MECHANICAL</option>
            <option value="ELECTRICAL">ELECTRICAL</option>
            <option value="IT">IT</option>
          </select>
        </div>
        <div>
          <label htmlFor="semester">Semester</label>
          <select name="semester" id="semester" defaultValue={semester} onChange={(event) => setsemester(event.target.value)}>
            <option value="default" disabled hidden>
              Choose a semester
            </option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
          </select>
        </div>
        {location.pathname==='/showquestion'?<div>
          <label htmlFor="subject">Subject</label>
          <select name="subject" id="subject" defaultValue={subject} onChange={(event) => setsubject(event.target.value)}>
            <option value="default" disabled hidden>
              Choose a subject
            </option>
            <option value="cryptography">Cryptography</option>
            <option value="networking">Networking</option>
            <option value="os">Operating System</option>
            <option value="parallel processing">Parallel Processing</option>
            <option value="AI">AI</option>
          </select>
        </div>:''}
        {/* <div>
          <label htmlFor="subject">Subject</label>
          <select name="subject" id="subject" defaultValue={subject} onChange={(event) => setsubject(event.target.value)}>
            <option value="default" disabled hidden>
              Choose a subject
            </option>
            <option value="cryptography">Cryptography</option>
            <option value="networking">Networking</option>
            <option value="os">Operating System</option>
            <option value="parallel processing">Parallel Processing</option>
          </select>
        </div> */}
        <button type='submit' onClick={() => { props.getFilterData(branch, semester, subject) }}>Go</button>
      </form>
    </div>

  )
}

export default Filter