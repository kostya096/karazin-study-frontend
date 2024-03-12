import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

const HomePage = () => {
    const user = useSelector(state => state.user.user)

    return (
        <div>
            This is our home page!
            {user ? (
                <div>
                    Hello {user.surname} {user.name}!
                </div>
            ) : (
                <div>
                    <NavLink to='/auth/sign_in'>Sign In</NavLink>
                    <NavLink to='/auth/sign_up'>Sign Up</NavLink>
                </div>
            )}
        </div>
    );
};

export default HomePage