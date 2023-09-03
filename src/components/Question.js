import React from 'react';
import { useAppContext } from '../context/AppContext';
import Options from './Options';

function Question() {
    const { questions, dispatch, answer, index } = useAppContext();
    const question = questions.at(index)
    return (
        <div>
            <h4>{question.question}</h4>
            <Options
                question={question}
                dispatch={dispatch}
                answer={answer}
            />
        </div>
    )
}

export default Question;