import { Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import NewPage from './pages/NewPage'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="about" element={<NewPage />} />
      </Routes>
    </div>
  )
}

export default App
