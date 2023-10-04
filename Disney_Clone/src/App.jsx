import { useState } from "react"
import {storage} from "./firebase"
import  {ref} from "firebase/storage"
 // import Home from './components/Home'
// import './App.css'
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
// import Detail from './components/Detail'
// import Header from './components/Header'
// import Login from './components/Login'
function App() {

  const [imageUpload, setImageUpload] = useState(null);
const uploadImage = () => {
if(imageUpload == null) return;
const imageRef = ref(storage, `images/`)
}
return (
    <div className="App">
      {/* <Header /> */}
<input type="file" onChange={(event) => {setImageUpload(event.target.files[0])}} />
<button onClick={uploadImage}> Upload Image</button>
      {/* <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="login" element={<Login />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="detail" element={<Detail />} />

        </Routes>
      </BrowserRouter> */}

    </div>
  )
}

export default App
