import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import BuildPage from './components/BuildPage'
import Tutorial from './components/Tutorial'
import SavedSnippets from './components/SavedSnippetsPage'




//Routing for the app (main page is the build page)
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BuildPage />} />
        <Route path="/build" element={<BuildPage />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/savedsnippets" element={<SavedSnippets />} />
      </Routes>
    </Router>
  )
}

export default App
