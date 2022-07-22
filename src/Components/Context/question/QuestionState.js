import { useState } from "react";
import questionState from "./questionContext";

const QuestionState = (props) => {
  const host = "http://localhost:5000";
  const data = [];

  const [state, setstate] = useState(data);

  // Get all the questions
  const getQuestions = async () => {
    // API call
    const response = await fetch(`${host}/api/question/fetchAllQuestion`, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc
      headers: {
        'Content-Type': 'application/json',
        'authenticationToken': localStorage.getItem('authenticationToken')
      },
    });
    const json = await response.json(); // parses JSON response into native JavaScript objects
    setstate(json);
  }


  // TODO: Add a question
  const addQuestions = async (subjectName, question, option1, option2, option3, option4, correctAnswer, semester, branch, course, totalMarks, totalQuestions) => {
    const response = await fetch(`${host}/api/question/createQuestion`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authenticationToken': localStorage.getItem('authenticationToken')
      },
      body: JSON.stringify({subjectName, question, option1, option2, option3, option4, correctAnswer, semester, branch, course, totalMarks, totalQuestions}),
    });
    const newQuestion = await response.json();
    setstate(state.concat(newQuestion));
  }

  // TODO: Edit a question

  // TODO: Delete a question

  return (
    <questionState.Provider value={{ state, setstate, getQuestions, addQuestions }}>
      {props.children}
    </questionState.Provider>
  )
}

export default QuestionState