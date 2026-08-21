import { useState } from 'react'
/* import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router"; */
import '../css/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </button>    
      <p>testing</p>
      </section>
     

    </>
  )
}

export default App
