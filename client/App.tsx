import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from './components/Home'

function App() {
  return (
    <Router>
      <div className="app">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/add-hobby">Add Hobby</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
