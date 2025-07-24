import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import LandingPage from './components/Landingpage'
import BuildPage from './components/BuildPage'
import Tutorial from './components/Tutorial'
import SavedSnippets from './components/SavedSnippets'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/build" element={<BuildPage />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/savedsnippets" element={<SavedSnippets />} />
      </Routes>
    </Router>
  )
}

export default App
