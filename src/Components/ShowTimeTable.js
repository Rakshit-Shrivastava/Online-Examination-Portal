import React, { useEffect, useContext, useState } from 'react'
import Filter from './Filter'
import TimeTable from './TimeTable'
import timeTableContext from './Context/timeTable/timeTableContext';

const ShowTimeTable = () => {

  // const context = useContext(timeTableContext);
  // const { state, getTimeTable } = context;

  // useEffect(() => {
  //   getTimeTable();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  // TODO: Display all the timetable

// FIXME:
  const [filter, setfilter] = useState({branch: '', semester: ''})
  const getFilterData = (branch, semester) =>{
    setfilter(()=>{
      return{branch,semester}
    })
  }
const semester = filter.semester;
const branch = filter.branch;

  // useEffect(()=>{
  //   console.log("inside useEffect");
  // })

  return (
    <div className='showTimetableContainer'>
      <Filter getFilterData={getFilterData}/>
      <div className="showTimetableContainerTimetable">
        <div className="accordian">
          <div className="accordianTab">
            <input type="checkbox" className='accordianToggle' name="toggle" id="toggle" />
            <label htmlFor="toggle">Timetable 1</label>
            <div className="accordianContent">
              <TimeTable branch={branch} semester={semester}/> 
            </div>
          </div>
          {/* <div className="accordianTab">
            <input type="checkbox" className='accordianToggle' name="toggle" id="toggle2" />
            <label htmlFor="toggle2">Timetable 2</label>
            <div className="accordianContent">
              <TimeTable />
            </div>
          </div>
          <div className="accordianTab">
            <input type="checkbox" className='accordianToggle' name="toggle" id="toggle3" />
            <label htmlFor="toggle3">Timetable 3</label>
            <div className="accordianContent">
              <TimeTable />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default ShowTimeTable