
import { Route, Routes } from "react-router-dom"
import "./Globalstyles.css"
import Loginpage from "./components/Pages/Login/Loginpage"


function App() {
 

  return (
   <Routes>
    <Route path="/login" element={<Loginpage/>}   />
   </Routes>
  )
}

export default App
