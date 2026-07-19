import './App.css'

export default function App() {
  const user = 'Harsh' // Change this to '' to test the guest greeting

  if (user) {
    return <h1 className="bgColor">Hello, {user}!</h1>
  } else {
    return <h1 className="bgColor">Hello Guest!</h1>
  }
}