import { BrowserRouter, Route, Routes } from "react-router-dom"
import {Login} from "./Pages/Login"
import { Home } from './Pages/Home';

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
