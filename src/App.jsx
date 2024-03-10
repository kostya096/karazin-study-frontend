import {BrowserRouter, Routes, Route} from 'react-router-dom'
import GeneralPage from "./pages/GeneralPage/GeneralPage.jsx";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<GeneralPage/>} />
          </Routes>
      </BrowserRouter>
  )
}

export default App
