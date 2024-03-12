import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SignUp from "./pages/SignUp/SignUp";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import MainPage from "./pages/MainPage/MainPage.jsx";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import CheckAuth from "./components/auth/CheckAuth.jsx";
import ProtectedRoute from "./components/auth/ProtectedRoute.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";

function App() {
    return (
        <BrowserRouter>
            <ToastContainer theme={'colored'}/>

            <Routes>
                <Route path='/' element={<CheckAuth />}>
                    <Route path="" element={<HomePage />} />

                    <Route path="main" element={<ProtectedRoute redirectPath="/auth/sign_in"/> }>
                        <Route path="" element={<MainPage />} />
                    </Route>

                    <Route path='/auth' element={<ProtectedRoute shouldLoggedIn={false} redirectPath="/main"/>}>
                        <Route path="sign_in" element={<LoginPage />}/>
                        <Route path="sign_up" element={<SignUp />}/>
                    </Route>
                </Route>

                <Route path='*' element={<h1>Page not found!</h1>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App