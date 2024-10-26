import Home from './components/Home.jsx'
import Education from './components/Education.jsx'
import Experiences from './components/Experiences.jsx'
import Achievements from './components/Achievements.jsx'
import References from './components/References.jsx'
import Projects from './components/Projects.jsx'
import Credits from './components/Credits.jsx'
import { createBrowserRouter, Route, Routes, RouterProvider } from 'react-router-dom';



const Root = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Education />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/references" element={<References />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/credits" element={<Credits />} />
      </Routes>
    </div>
  )
}

const router = createBrowserRouter(
  [{path:"*", Component: Root}]
)

export default function App() {

  return (
    <RouterProvider router={router} />
  )
}


