import './App.css'
import { useReducer } from 'react'

function reducer(state: number, action: { type: string }) {
  switch (action.type) {
    case 'INCREMENT_AGE':
      if (state < 100) {
        return state + 1
      }
      return state
    default:
      return state
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, 0)

  return (
    <div className="bgColor">
      <h1>User Age</h1>
      <p>Current Age: {state}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT_AGE' })}>Increase Age</button>
    </div>
  )
}