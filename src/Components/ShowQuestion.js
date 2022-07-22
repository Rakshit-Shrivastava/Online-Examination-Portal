import React, { useContext, useEffect, useState } from 'react'
import questionContext from './Context/question/questionContext';
import Filter from './Filter';

const ShowQuestion = () => {
    const context = useContext(questionContext);
    const { state, getQuestions } = context;
    const [filter, setfilter] = useState({ branch: '', semester: '', subject: '' });

    const getFilterData = (branch, semester, subject) => {
        setfilter(() => {
            return { branch, semester, subject }
        })
    }
    const semester = filter.semester;
    const branch = filter.branch;
    const subject = filter.subject;

    // !subject && !branch && !semester ? console.log('empty') : console.log('not empty');

    var arr = [];
    var index = -1;
        for (var i = 0, len = state.length; i < len; i++) {
            if (state[i].branch === branch && state[i].subjectName === subject && state[i].semester === semester) {
                index = i;
                arr.push(state[index]);
            }
        }    

    useEffect(() => {
        getQuestions();
    });

    

    return (
        <div className='showQuestionContainer'>
            <Filter getFilterData={getFilterData} />
            <div className="showQuestionContainerQuestion">
                <div className="accordian">
                    {/* {state.map((value, key) => {
                        return (
                            <div className="accordianTab" key={key}>
                                <input type="radio" className='accordianToggle' name="toggle" id={key} />
                                <label htmlFor={key}>{value.question}</label>
                                <div className="accordianContent">
                                    <ul>
                                        <li>1. {value.option1}</li>
                                        <li>2. {value.option2}</li>
                                        <li>3. {value.option3}</li>
                                        <li>4. {value.option4}</li>
                                    </ul>
                                    <li className='CA'>Correct Answer: {value.correctAnswer}</li>
                                </div>
                            </div>
                        )
                    })} */}

                    {!subject && !branch && !semester ? state.map((value, key) => {
                        return (
                            <div className="accordianTab" key={key}>
                                <input type="radio" className='accordianToggle' name="toggle" id={key} />
                                <label htmlFor={key}>{value.question}</label>
                                <div className="accordianContent">
                                    <ul>
                                        <li>1. {value.option1}</li>
                                        <li>2. {value.option2}</li>
                                        <li>3. {value.option3}</li>
                                        <li>4. {value.option4}</li>
                                    </ul>
                                    <li className='CA'>Correct Answer: {value.correctAnswer}</li>
                                </div>
                            </div>
                        )
                    }) : arr.map((value, key) => {
                        return (
                            <div className="accordianTab" key={key}>
                                <input type="radio" className='accordianToggle' name="toggle" id={key} />
                                <label htmlFor={key}>{value.question}</label>
                                <div className="accordianContent">
                                    <ul>
                                        <li>1. {value.option1}</li>
                                        <li>2. {value.option2}</li>
                                        <li>3. {value.option3}</li>
                                        <li>4. {value.option4}</li>
                                    </ul>
                                    <li className='CA'>Correct Answer: {value.correctAnswer}</li>
                                </div>
                            </div>
                        )
                    })}    

                </div>
            </div>
        </div>
    )
}

export default ShowQuestion