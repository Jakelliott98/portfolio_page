import './App.css'
import Homepage from './pages/Home'
import CalorieCalculator from './pages/projects/project-pages/CalorieCalculator'
import ComplianceTracker from './pages/projects/project-pages/ComplianceTracker'
import FeedbackForm from './pages/projects/project-pages/FeedbackForm'
import ProjectOutlet from './pages/projects/project-pages/ProjectOutlet'
import { Routes, Route } from 'react-router'

function App() {

return (
  <Routes>
    <Route index element={<Homepage/>}/>
    <Route path='feedbackForm' element={<FeedbackForm />}/>
    <Route path='complainceTracker' element={<ComplianceTracker />}/>
    <Route path='calorieCalculator' element={<CalorieCalculator />}/>
  </Routes>
)
}

export default App

