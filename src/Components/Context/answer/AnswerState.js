import { useState } from "react";
import answerState from "./answerContext";

const AnswerState = (props) => {
    const host = "http://localhost:5000";
    const data = [];
  
    const [state, setstate] = useState(data);

    // Get all the questions
  const getAnswer = async () => {
    // API call
    const response = await fetch(`${host}/api/answer/fetchAllAnswer`, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc
      headers: {
        'Content-Type': 'application/json',
        'authenticationToken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZWFjaGVyIjp7ImlkIjoiNjFmMGZiNTI1YTkxMDhmMjllMjJkMTZlIn0sImlhdCI6MTY0MzE4Mjk5N30.ia9EUrCGSQiPGuKyD9ALu5ZQ9mOe7jZaozaVtK4_8s0'
      },
    });
    const json = await response.json(); // parses JSON response into native JavaScript objects
    setstate(json);
  }

    // TODO: Submitting the answers
    const addAnswer = async (name, selectedOption) => {
        const response = await fetch(`${host}/api/answer/submitAnswer`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'authenticationToken': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZWFjaGVyIjp7ImlkIjoiNjFmMGZiNTI1YTkxMDhmMjllMjJkMTZlIn0sImlhdCI6MTY0MzE4Mjk5N30.ia9EUrCGSQiPGuKyD9ALu5ZQ9mOe7jZaozaVtK4_8s0'
          },
          body: JSON.stringify({name, selectedOption}),
        });
        const newAnswer = await response.json();
        setstate(state.concat(newAnswer));
      }

  return (
    <answerState.Provider value={{ state, setstate, getAnswer, addAnswer }}>
      {props.children}
    </answerState.Provider>
  )
}

export default AnswerState