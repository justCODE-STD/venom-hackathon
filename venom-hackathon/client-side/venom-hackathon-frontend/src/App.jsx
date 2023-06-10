import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.scss'
import Landing from './Pages/Landing/Landing'
import Signin from './Pages/Signin/Signin'
import Signup from './Pages/Signup/Signup'
import Dashboard from "./Pages/Dashboard/Dashboard"

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
