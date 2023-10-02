
import Home from './components/Home'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Detail from './components/Detail'
import Header from './components/Header'
function App() {
  return (
    <div className="App">
      <Header /> 
      <BrowserRouter>
        <Header />
        <Routes>

          <Route exact path="/" element={<Home />} />
          <Route exact path="detail" element={<Detail />} />

        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
