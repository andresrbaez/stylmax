import './App.css'
import Footer from './components/Footer/Footer'
import NavBar from './components/NavBar/NavBar'

function App() {

  return (
    <>
    <div className='w-full'>
        <NavBar/>
    </div>
      <div className="container mt-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, esse?
      </div>
    <div className='w-full absolute bottom-0'>
        <Footer/>
    </div>
    </>
  )
}

export default App
