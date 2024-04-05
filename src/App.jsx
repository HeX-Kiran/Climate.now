import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import { ToastContainer } from "react-toastify"
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>

        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App
