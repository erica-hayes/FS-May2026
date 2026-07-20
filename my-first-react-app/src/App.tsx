import './App.css'
import { useReducer, useState } from 'react'

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
  const [user, setUser] = useState('Harsh')
  const [age, dispatch] = useReducer(reducer, 0)
  const [inputValue, setInputValue] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setUser(inputValue.trim())
    alert(`Submitted value: ${inputValue}`)
  }

  return (
    <div className="bgColor">
      {user ? <h1>Hello, {user}!</h1> : <h1>Hello Guest!</h1>}

      <h2>User Age</h2>
      <p>Current Age: {age}</p>
      <button type="button" onClick={() => dispatch({ type: 'INCREMENT_AGE' })}>
        Increase Age
      </button>

      <form onSubmit={handleSubmit}>
        <label htmlFor="nameInput">Name:</label>
        <input id="nameInput" type="text" value={inputValue} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}