import React, { useState, useContext } from 'react';
import timeTableContext from './Context/timeTable/timeTableContext';

const CreateTimetable = () => {

  const [inputField, setinputField] = useState([
    {
      day: '',
      date: '',
      subject: ''
    },
    {
      day: '',
      date: '',
      subject: ''
    },
    {
      day: '',
      date: '',
      subject: ''
    },
  ]);

  const hadleChangeInput = (index, event) => {
    const values = [...inputField];
    values[index][event.target.name] = event.target.value;
    setinputField(values);
  }

  const context = useContext(timeTableContext);
  const {addTimeTable} = context;

  const hadleSubmit = (event) => {
    event.preventDefault();
    console.log("InputFields: ", inputField);
    // console.log("Input: ", input);
    for (let index = 0; index < inputField.length; index++) {
      inputField[index].branch = input.branch;
      inputField[index].semester = input.semester;
    }
    for (let index = 0; index < inputField.length; index++) {
      for (let j = 0; j < 1; j++) {
        addTimeTable(inputField[index].date, inputField[index].day, inputField[index].subject, inputField[index].branch, inputField[index].semester);
      }
    }

    
  }

  const handleAdd = (rows) => {
    for (let index = 0; index < rows; index++) {
      setinputField((inputField) => ([...inputField, { day: '', date: '', subject: '' }]));
    }
  }

  // const handleRemove = (index) => {
  //     const values = [...inputField];
  //     values.splice(index, 1);
  //     setinputField(values);
  // }

  const handleRemove = () => {
    const index = inputField.length - 1;
    const values = [...inputField];
    values.splice(index, 1);
    setinputField(values);
  }

  const [input, setInput] = useState({
    branch: "",
    semester: ""
  })

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput(() => {
      return {
        ...input, [name]: value
      }
    })
  }

  return (
    <div className='tableContainer'>
      <form action="" onSubmit={hadleSubmit}>
        <table className="timeTable">
          <thead>
            <tr>
              <th>Day</th>
              <th>Date</th>
              <th>Subject</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {inputField.map((inputField, index) => (
                  <div key={index}>
                    <input type="text" name='day' value={inputField.day} onChange={event => { hadleChangeInput(index, event) }} />
                    <input type="text" name='date' value={inputField.date} onChange={event => { hadleChangeInput(index, event) }} />
                    <input type="text" name='subject' value={inputField.subject} onChange={event => { hadleChangeInput(index, event) }} />
                    {/* <button onClick={() => { handleAdd() }}>Add</button>
                            <button onClick={() => { headleRemove(index) }}>Remove</button> */}
                  </div>
                ))}
              </td>
            </tr>
          </tbody>
        </table>
        <div className="subTableContainer">
          <input type="text" placeholder='Enter branch' name="branch" value={input.branch} onChange={handleChange} />
          <input type="text" placeholder='Enter semester' name="semester" value={input.semester} onChange={handleChange} />
        </div>
        <button onClick={() => { handleAdd(prompt("Enter number of extra rows")) }}>Add Row</button>
        <button onClick={() => { handleRemove() }}>Remove Row</button>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default CreateTimetable