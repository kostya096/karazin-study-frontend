import {useDispatch, useSelector} from "react-redux";
import {logoutUser} from "../../../features/user/userSlice.js";




const MainPage = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.user.user)

    return (
        <>
            <div>
                {user?.name} {user?.surname}
                <button onClick={() => dispatch(logoutUser())}>Log out</button>
            </div>
        </>
    );
};

export default MainPage