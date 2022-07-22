import React, {useState} from 'react'
import timeTableState from './timeTableContext';


const TimeTableState = (props) => {
    const host = "http://localhost:5000";
    const data = [];
  
    const [state, setstate] = useState(data);

        // Get all the timetable
  const getTimeTable = async () => {
    // API call
    const response = await fetch(`${host}/api/timetable/fetchTimetable`, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc
      headers: {
        'Content-Type': 'application/json',
        'authenticationToken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZWFjaGVyIjp7ImlkIjoiNjFmMGZiNTI1YTkxMDhmMjllMjJkMTZlIn0sImlhdCI6MTY0MzE4Mjk5N30.ia9EUrCGSQiPGuKyD9ALu5ZQ9mOe7jZaozaVtK4_8s0'
      },
    });
    const json = await response.json(); // parses JSON response into native JavaScript objects
    setstate(json);
  }

  // TODO: Add data to timetable
  const addTimeTable = async (day, date, subject, branch, semester) => {
    const response = await fetch(`${host}/api/timetable/createTimetable`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authenticationToken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZWFjaGVyIjp7ImlkIjoiNjFmMGZiNTI1YTkxMDhmMjllMjJkMTZlIn0sImlhdCI6MTY0MzE4Mjk5N30.ia9EUrCGSQiPGuKyD9ALu5ZQ9mOe7jZaozaVtK4_8s0'
      },
      body: JSON.stringify({day, date, subject, branch, semester}),
    });
    const newTimeTable = await response.json();
    setstate(state.concat(newTimeTable));
  }

  return (
    <timeTableState.Provider value={{state, setstate, getTimeTable, addTimeTable}}>
        {props.children}
    </timeTableState.Provider>
  )
}

export default TimeTableState