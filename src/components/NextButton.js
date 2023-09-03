import React from 'react';
import { useAppContext } from '../context/AppContext';

function NextButton() {
    const { dispatch, answer, numQuestions, index } = useAppContext();
    if (answer === null) return null;

    if (index < numQuestions - 1) return (
        <button
            className='btn btn-ui'
            onClick={() =>
                dispatch({ type: 'nextQuestion' })}
        >
            Next
        </button>
    )

    if (index === numQuestions - 1) return (
        <button
            className='btn btn-ui'
            onClick={() =>
                dispatch({ type: 'finish' })}
        >
            Finish
        </button>
    )
}

export default NextButton;