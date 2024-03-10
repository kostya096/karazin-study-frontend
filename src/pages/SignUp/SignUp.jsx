import {NavLink} from "react-router-dom";
const SignUp = () => {
    return (
        <div>
            <div className="login-container">
                <form className="login-form">
                    <img src={'logo.jpg'} width="200" height="200"
                         style={{borderRadius: '50%', marginTop: '-130px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)'}}/>
                    <div className={'title'}>
                        Create your account
                    </div>
                    <input type="name" id="name" name="name" placeholder="Name" required/>
                    <input type="surname" id="surname" name="surname" placeholder="Surname" required/>
                    <input type="email" id="email" name="email" placeholder="Email" required/>
                    <input type="password" id="password" name="password" placeholder="Password" required/>
                    <input type="password" id="repeatPassword" name="repeatPassword" placeholder="Repeat your password"
                           required/>
                    <button type="submit" className="login-button">Sign up</button>
                    <div className="signup-link">
                        Already have an account? <NavLink to="/">Sign in</NavLink>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp