import { count } from 'console'
import React, { useReducer } from 'react'

interface State {
    count: number;
}
type Action =
    | { type: 'increment' }
    | { type: 'decrement' }
    | { type: 'reset' }

const initialState: State = { count: 0 }

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 }
        case 'decrement':
            return { count: state.count - 1 }
        case 'reset':
            return { count: 0 }
        default:
            throw new Error()
    }
}

export default function Ex03() {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div className='alert alert-success'>
            <p>Example 03</p>
            <p>Quản lý trạng thái phức tạp bằng useReducer</p>
            <p>Sử dụng useReducer để quản lý trạng thái của một bộ đếm nâng cao. Cho phép tăng, giảm, đặt lại giá trị.</p>
            <h2>Bo Dem: {state.count}</h2>
            <button onClick={() => dispatch({ type: 'increment' })}>Tang +</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Giam -</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Dat lai</button>
        </div>
    )
}
