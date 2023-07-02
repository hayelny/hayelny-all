import './index.css'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Register from './components/Register'
import Upload from './components/Upload'
import Result from './components/Result'
function App() {

  return (
    <>
      <Router>
    <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/result" element={<Result />} />
          <Route path="/result/:id" element={<Result />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
