import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element=<Homepage /> />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
