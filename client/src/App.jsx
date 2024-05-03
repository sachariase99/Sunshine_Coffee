import './App.css'
import { Home } from './pages'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Shop from './pages/shop'
import Navbar from './components/navbar'
import Header from './components/header'
import Footer from './components/footer'

function App() {
  return (
    <Router>
      <Navbar />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
