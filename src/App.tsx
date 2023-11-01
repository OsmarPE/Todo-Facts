import { useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import './App.css'
import Header from './Layouts/Header'
import Main from './Layouts/Main'
import { CategoryProvider } from './Context/useCategory'
function App() {
  
  const [showModal, setShowModal] = useState<boolean>(false)
  
  return (
    

    <>
      <div className="container mx-auto max-w-[1000px] w-[90%]">
          <CategoryProvider>
              <Header setShowModal={setShowModal}/>
              <Main showModal = {showModal} setShowModal={setShowModal}/>
          </CategoryProvider>
      </div>
    </>
  )
}

export default App
