import React from 'react';
import { useAppContext } from '../context/AppContext';

function Options({ question }) {
    const { dispatch, answer } = useAppContext();
    const hasAnswered = answer !== null;

    return (
        <div className='options'>
            {question.options.map((option, i) => (
                <button
                    className={`btn btn-option 
                    ${i === answer ? "answer" : ""}
                    ${hasAnswered ? i === question.correctOption ? "correct" : "wrong" : ""}
                    `}
                    key={option}
                    disabled={hasAnswered}
                    onClick={() => dispatch({ type: "newAnswer", payload: i })}
                >{option}</button>
            ))}
        </div>
    )
}

export default Options;