import React, { useEffect, useContext } from 'react';
import timeTableContext from './Context/timeTable/timeTableContext';

const TimeTable = (props) => {

  const context = useContext(timeTableContext);
  const { state, getTimeTable } = context;

  useEffect(() => {
    getTimeTable();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // const shallowEqual = (obj1, obj2) => {
  //   const key1 = Object.keys(obj1);
  //   const key2 = Object.keys(obj2);

  //   if (key1.length !== key2.length) {
  //     return false
  //   }
  //   for (let key of key1) {
  //     if (obj1[key] !== obj2[key]) {
  //       return false;
  //     }
  //   }
  //   return true;
  // }

  // const data = arrr.some((item) => {
  //   return (shallowEqual(item, obj1))
  // })

// FIXME:
  var arr = [];
  var index = -1;
  for (var i = 0, len = state.length; i < len; i++) {
    if (state[i].branch === props.branch && state[i].semester === props.semester) {
      index = i;
      // break;
      arr.push(state[index]);
    }
  }
  // const data = [
  //   { day: "Monday", date: "20/01/2021", subject: "CN" },
  //   { day: "Wednesday", date: "22/01/2021", subject: "PP" },
  //   { day: "Friday", date: "24/01/2021", subject: "Cryptograpgy" },
  //   { day: "Saturday", date: "26/01/2021", subject: "E-commerce" },
  //   { day: "Monday", date: "28/01/2021", subject: "MF" }
  // ]
  return (
    <div className='timetableContainer'>
      {/* <table className='time-table'>
        <thead>
          <tr>
            <th>Date</th>
            <th>Day</th>
            <th>Subject</th>
          </tr>
        </thead>
        <tbody>
          {data.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.day}</td>
                <td>{val.date}</td>
                <td>{val.subject}</td>
              </tr>
            )
          })}
        </tbody>
      </table> */}
      <table className="timeTable">
        <thead>
          <tr>
            <th>Day</th>
            <th>Date</th>
            <th>Subject</th>
          </tr>
        </thead>
        <tbody>
          {arr.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.day}</td>
                <td>{val.date}</td>
                <td>{val.subject}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default TimeTable
