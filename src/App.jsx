import {BrowserRouter, Routes, Route} from 'react-router-dom'
import GeneralPage from "./pages/GeneralPage/GeneralPage";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<GeneralPage/>} />
              <Route path="/SignUp" element={<SignUp/>} />
          </Routes>
      </BrowserRouter>
  )
}

export default App
