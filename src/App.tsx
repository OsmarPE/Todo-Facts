import { useState } from 'react'
import './App.css'
import Header from './Layouts/Header'
import Main from './Layouts/Main'
function App() {
  
  const [showModal, setShowModal] = useState<boolean>(false)
  
  return (
    

    <>
      <div className="container mx-auto max-w-[1000px] w-[90%]">
          <Header setShowModal={setShowModal}/>
          <Main showModal = {showModal} setShowModal={setShowModal}/>
      </div>
    </>
  )
}

export default App
