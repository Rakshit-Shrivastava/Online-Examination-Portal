import React, { useContext, useEffect, useState, useRef } from 'react';
import answerContext from './Context/answer/answerContext';
import questionContext from './Context/question/questionContext';


const ExamPage = () => {
    const context = useContext(questionContext);
    const { state, getQuestions } = context;

    const contextAnswer = useContext(answerContext);
    const { addAnswer } = contextAnswer;

    const [submit, setsubmit] = useState(false);

    const changeStyle = useRef();

    const [style, setstyle] = useState(null);

    useEffect(() => {
        getQuestions();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    
    const correctAnswer = [];

    const handleChange = (event, pos) => {
        /*  working code
        FIXME:
        const {name, value} = event.target;
        const obj = { 'name': name, 'value': value }
        correctAnswer.push(obj)
        */

        const { name, value } = event.target;
        const obj = { 'name': name, 'value': value }
        correctAnswer.push(obj)
        
        // changeStyle.current.style.backgroundColor = 'rgb(133, 211, 133)';
    }

    const handleClick = () => {
        /*  working code
        FIXME:
        for (var i = 0; i < state.length; i++) {
            const data = correctAnswer[i]
            console.log(data.name, data.value)
            addAnswer(data.name, data.value)
        }
        */
        const ids = correctAnswer.map(o => o.name);
        const filtered = correctAnswer.filter(({ name }, index) => !ids.includes(name, index + 1))
   
        for (var i = 0; i < state.length; i++) {
            const data = filtered[i]
            addAnswer(data.name, data.value)
        }
        setsubmit(true);
    }

    const handleStyle = (pos) =>{
        setstyle(pos)
    }
   useEffect(()=>{
       handleStyle();
   },[])

    return (
        <div className='examPage'>
            <div className="examPage-sidebar">
                <h3>Total questions</h3>
                <div className="examPage-sidebar-numbers">
                    {
                        state.map((value, key) => {
                            return <p ref={changeStyle} style={key===style? {backgroundColor: 'green'} : {backgroundColor: 'red'}}  value={key} key={key}>{key + 1}</p>
                        })
                    }
                </div>
                <h3>Time remaning</h3>
                <div className="examPage-sidebar-time">
                    <h1>00:55:23</h1>
                </div>
                <div className="submitBtn">
                    <button type='submit' onClick={handleClick} >Submit</button>
                </div>
            </div>
            <div className="examPage-body">
                {/* {
                    state.map((s1, pos) => {
                        return <Question s1={s1} key={pos} />;
                    })
                } */}
                {
                    state.map((s1, pos) => {
                        return (
                            <div className="examPage-body-questions" key={pos}>
                                <p>{s1.question}</p>

                                <input type="radio" id={'option1' + s1._id} name={s1._id} value={s1.option1} disabled={submit?true:false} onChange={event => { handleChange(event, pos) }} onClick={event=>{handleStyle(pos)}}/>
                                <label htmlFor={'option1' + s1._id}>{s1.option1}</label><br />

                                <input type="radio" id={'option2' + s1._id} name={s1._id} value={s1.option2 } disabled={submit?true:false} onChange={event => { handleChange(event, pos) }}/>
                                <label htmlFor={'option2' + s1._id}>{s1.option2}</label><br />

                                <input type="radio" id={'option3' + s1._id} name={s1._id} value={s1.option3} disabled={submit?true:false} onChange={event => { handleChange(event, pos) }}/>
                                <label htmlFor={'option3' + s1._id}>{s1.option3}</label><br />

                                <input type="radio" id={'option4' + s1._id} name={s1._id} value={s1.option4} disabled={submit?true:false} onChange={event => { handleChange(event, pos) }}/>
                                <label htmlFor={'option4' + s1._id}>{s1.option4}</label>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default ExamPage
