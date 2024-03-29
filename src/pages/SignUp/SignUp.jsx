import {NavLink, useNavigate} from "react-router-dom";
import {useState} from "react";
// import {getUserInfo, loginUser, registerUser} from "../../components/functions/auth.jsx";
import {toast} from "react-toastify";
import {useUserSignupMutation} from "../../features/user/userApi.js";

const SignUp = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [surname, setSurName] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');

    const [signup] = useUserSignupMutation()

    // регайся
    const handleSubmit = async e => {
        e.preventDefault();
        /* Тут нужно сделать валидацию всех полей!!
            name >= 4
            surname >= 4
            email>=5
            password >= 5

            password1 == password2

            password имеет любой символ, одну заглавную

            Если есть ошибка в этих условиях - выводить на экран
         */

        try {
            await signup({
                name, surname, email, password: password1
            }).unwrap()
            navigate("/auth/sign_in")
            toast.success('Акаунт успішно створений! Для продовження увійдіть в акаунт')
        } catch (e) {
            toast.error(e.data.detail)
        }
    }

    return (<div>
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <img src={'/logo.jpg'} width="200" height="200"
                     style={{borderRadius: '50%', marginTop: '-130px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)'}}/>
                <div className={'title'}>
                    Create your account
                </div>
                <input type="name" id="name" name="name" placeholder="Name" required
                       onChange={e => setName(e.target.value)}/>
                <input type="surname" id="surname" name="surname" placeholder="Surname" required
                       onChange={e => setSurName(e.target.value)}/>
                <input type="email" id="email" name="email" placeholder="Email" required
                       onChange={e => setEmail(e.target.value)}/>
                <input type="password" id="password" name="password" placeholder="Password" required
                       onChange={e => setPassword1(e.target.value)}/>
                <input type="password" id="repeatPassword" name="repeatPassword" placeholder="Repeat your password"
                       required onChange={e => setPassword2(e.target.value)}/>
                <button type="submit" className="login-button">Sign up</button>
                <div className="signup-link">
                    Already have an account? <NavLink to="/">Sign in</NavLink>
                </div>
            </form>
        </div>
    </div>);
};

export default SignUp