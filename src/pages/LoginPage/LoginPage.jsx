import "./LoginPage.css"
import {NavLink, useNavigate} from "react-router-dom";
import {useState} from "react";
import {getUserInfo, loginUser} from "../../components/functions/auth.jsx";


const LoginPage = (props) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        let [status, token] = await loginUser({
            email,
            password
        });
        console.log(status)
        console.log(token)
        if (status === false) {
            console.log(token.detail) // Это ошибка от АПИ,сделай отображение
        } else {
            localStorage.setItem("user", JSON.stringify({token: token.access_token}))
            let [info_status, userInfo] = await getUserInfo(token.access_token);
            if (info_status) {
                console.log(userInfo)
                props.user.setLoggedIn(true)
                props.user.setUserInfo(userInfo)
                navigate("/")
            }

        }
    }
    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <img src={'logo.jpg'} width="200" height="200"
                     style={{borderRadius: '50%', marginTop: '-130px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)'}}/>
                <div className={'title'}>
                    Welcome back
                </div>
                <input type="email" id="email" name="email" placeholder="Email" required
                       onChange={e => setEmail(e.target.value)}/>
                <input type="password" id="password" name="password" placeholder="Password" required
                       onChange={e => setPassword(e.target.value)}/>
                <button type="submit" className="login-button">Sign in</button>
                <div className="signup-link">
                    No account? <NavLink to="/sign_up">Create one</NavLink>
                </div>
            </form>
        </div>
    );
};

export default LoginPage