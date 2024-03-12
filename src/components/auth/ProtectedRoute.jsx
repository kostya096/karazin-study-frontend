import {Navigate, Outlet} from "react-router-dom";
import {useSelector} from "react-redux";

export default function ProtectedRoute({children, shouldLoggedIn = true, redirectPath = '/sign_in'}) {
    const user = useSelector(store => store.user.user)

    if (!user && shouldLoggedIn || user && !shouldLoggedIn) {
        return <Navigate to={redirectPath} />;
    }

    return children || <Outlet />;
}