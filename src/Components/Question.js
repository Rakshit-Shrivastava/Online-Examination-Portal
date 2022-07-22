import React, { useState } from 'react';
// import SubmitExam from './SubmitExam';

export const Question = (props) => {
    const [correctAnswer, setcorrectAnswer] = useState();
    return (
        
        <div>
            <div className="examPage-body-questions">
                <p>{props.s1.question}</p>
                <input type="radio" id={'option1' + props.s1._id} name={props.s1._id} value={props.s1.option1} onChange={event => setcorrectAnswer(event.target.value)} />
                <label htmlFor={'option1' + props.s1._id}>{props.s1.option1}</label><br />
                <input type="radio" id={'option2' + props.s1._id} name={props.s1._id} value={props.s1.option2} onChange={event => setcorrectAnswer(event.target.value)} />
                <label htmlFor={'option2' + props.s1._id}>{props.s1.option2}</label><br />
                <input type="radio" id={'option3' + props.s1._id} name={props.s1._id} value={props.s1.option3} onChange={event => setcorrectAnswer(event.target.value)} />
                <label htmlFor={'option3' + props.s1._id}>{props.s1.option3}</label><br />
                <input type="radio" id={'option4' + props.s1._id} name={props.s1._id} value={props.s1.option4} onChange={event => setcorrectAnswer(event.target.value)} />
                <label htmlFor={'option4' + props.s1._id}>{props.s1.option4}</label>
            </div>            
                <label htmlFor="" hidden onChange={props.getData(correctAnswer)}></label>
        </div>
    )
}
