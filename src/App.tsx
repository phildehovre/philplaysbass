import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Hero from './Hero'
import About from './About'
import Nav from './Nav'

function App() {

  return (
    <>
    <Nav />
      <Router>
        <Routes>
          <Route element={<Hero />} path='/' />
          <Route element={<About />} path='/about' />
        </Routes>
      </Router>
    </>
  )
}

export default App
