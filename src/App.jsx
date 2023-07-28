import './App.css'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Esteticos from './pages/Esteticos'
import Corporales from './pages/Corporales'

function App() {

  return (
    // <>
    // <div className='w-full'>
    //     <NavBar/>
    // </div>
    //   <div className="container mt-10">
    //     <Home
    //     />
    //   </div>
    // <div className='w-full border-[var(--color-extralightblack)] border-t'>
    //     <Footer/>
    // </div>
    // </>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/esteticos' element={<Esteticos />} />
        <Route path='/corporales' element={<Corporales />} />
      </Routes>
  )
}

export default App
