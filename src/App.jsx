import {BrowserRouter, Routes, Route} from 'react-router-dom'
import RegisterPage from "./pages/RegisterPage/RegisterPage.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import CheckAuth from "./components/auth/CheckAuth.jsx";
import {ProtectedRoute, AdminRoute} from "./components/auth/ProtectedRoute.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import Header from "./components/Header/Header.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";
import AdminPage from "./pages/AdminPage/AdminPage.jsx";

function App() {
    return (
        <BrowserRouter>
            <ToastContainer theme={'colored'}/>
            <Header/>
            <br/>
            <br/>
            <Routes>
                <Route path='/' element={<CheckAuth/>}>
                    <Route path="" element={<HomePage/>}/>

                    <Route path="dashboard" element={<ProtectedRoute redirectPath="/auth/login"/>}>
                        <Route path="" element={<Dashboard/>}/>
                    </Route>

                    <Route path='/auth' element={<ProtectedRoute shouldLoggedIn={false} redirectPath="/dashboard"/>}>
                        <Route path="login" element={<LoginPage/>}/>
                        <Route path="register" element={<RegisterPage/>}/>
                    </Route>


                    <Route path='/admin' element={<AdminRoute redirectPath="/dashboard"/>}>

                        <Route path="" element={<AdminPage/>}/>
                    </Route>
                </Route>

                <Route path='*' element={<NotFoundPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App