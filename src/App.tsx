import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './comp/Header'
import Home from './comp/Home'
import About from './comp/About'
import Experience from './comp/Experience'
import Contact from './comp/Contact'

function App() {

  return (
    <>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Header></Header>
      <Routes>
 
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/experience" element={<Experience />}></Route>
        <Route path="/contact" element={<Contact />}></Route>

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
