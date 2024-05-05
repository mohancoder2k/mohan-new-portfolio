import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Nav from './components/Nav.jsx'
import { Home, About, Projects, Contact } from './pages'

const App = () => {
  return (
    <main className="bg-slate-300/20 h-full">
      <BrowserRouter basename="/portfolio">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}

export default App
