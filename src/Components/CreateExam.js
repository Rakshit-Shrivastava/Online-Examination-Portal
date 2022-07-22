import React, {useState, useContext} from 'react';
import questionContext from './Context/question/questionContext';

const CreateExam = () => {
    const context = useContext(questionContext);
    const { addQuestions } = context;

    const [first, setfirst] = useState({
        totalmark: "",
        totalquestion: "",
        course: "",
        branch: "",
        semester: "",
        subjectname: "",
        question: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        correctanswer: "",
    });

    const hadleChange = (event) =>{
        const {name, value} = event.target;
        setfirst(() =>{
            return {
                ...first, [name]: value
            }
        })
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        addQuestions(first.subjectname, first.question, first.option1, first.option2, first.option3, first.option4, first.correctanswer, first.semester, first.branch, first.course, first.totalmark, first.totalquestion);
    }

    return (
        <div className='createExam'>
            <div className="createExamForm">
                <form action="" onSubmit={handleSubmit}>
                    <ul>
                        <li>
                            <label htmlFor="">Total marks:</label>
                            <input type="text" name='totalmark' value={first.totalmark} onChange={hadleChange}/>
                        </li>
                        <li>
                            <label htmlFor="">Total questions</label>
                            <input type="text" name='totalquestion' value={first.totalquestion} onChange={hadleChange}/>
                        </li>
                        <li>
                            <label htmlFor="">Course</label>
                            <input type="text" name='course' value={first.course} onChange={hadleChange}/>
                        </li>
                        <li>
                            <label htmlFor="">Branch</label>
                            <input type="text" name='branch' value={first.branch} onChange={hadleChange}/>
                        </li>
                        <li>
                            <label htmlFor="">Semester</label>
                            <input type="text" name='semester' value={first.semester} onChange={hadleChange}/>
                        </li>
                        <li>
                            <label htmlFor="">Subject name</label>
                            <input type="text" name='subjectname' value={first.subjectname} onChange={hadleChange}/>
                        </li>
                        <li>
                            <label htmlFor="">Question</label>
                            <input type="text" name='question' value={first.question} onChange={hadleChange}/>
                        </li>
                        <li>
                            <label htmlFor="">Option1</label>
                            <input type="text" name='option1' value={first.option1} onChange={hadleChange}/>
                        </li>
                        <li>
                            <label htmlFor="">Option2</label>
                            <input type="text" name='option2' value={first.option2} onChange={hadleChange}/>
                        </li>
                        <li>
                            <label htmlFor="">Option3</label>
                            <input type="text" name='option3' value={first.option3} onChange={hadleChange}/>
                        </li>
                        <li>
                            <label htmlFor="">Option4</label>
                            <input type="text" name='option4' value={first.option4} onChange={hadleChange}/>
                        </li>
                        <li>
                            <label htmlFor="">Correct answer</label>
                            <input type="text" name='correctanswer' value={first.correctanswer} onChange={hadleChange}/>
                        </li>
                        <li>
                            <button type="submit">Submit</button>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    )
}
export default CreateExam
