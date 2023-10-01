
import Home from './components/Home'
import './App.css'
import { BrowserRouter , Routes, Route, Link } from 'react-router-dom'
import Detail from './components/Detail'
import Header from './components/Header'
function App() {
  return (
    <div className="App">
<Header />
<BrowserRouter>
      <Routes>
      <Header />
      <S
        <Route path="/" element={<Home />} >
      
          <Route path="delete" element={<Detail/>} />
   
        </Route>
      </Routes>
    </BrowserRouter>

     
    </div>
  )
}

export default App
