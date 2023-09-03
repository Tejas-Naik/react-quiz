import React from 'react';
import { useAppContext } from '../context/AppContext';

function RestartButton() {
    const { dispatch } = useAppContext();
    return (
        <button
            className='btn btn-ui'
            onClick={() =>
                dispatch({ type: 'restart' })}
        >
            Restart Quiz
        </button>
    )
}

export default RestartButton