import React from 'react'
import Header from './components/Header'
import Products from "../components/Products"
function App() {
  return (
    <>
    <Header/>
      <Products/>
      <div className='main_heading'>
        <h1>Quick Cards</h1>
      </div>
    </>
  )
}

export default App
