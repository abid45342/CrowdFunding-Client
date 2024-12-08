
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../pages/Loading';
import { useContext } from 'react';

const PrivateRoute = ({children}) => {
    const {user,loading}= useContext(AuthContext);
    const location = useLocation();
    

    if(loading)
    {
        return <Loading></Loading>;
    }
    if(user && user?.email)
    {
        return children;
    }
    return ( <Navigate state={location.pathname} to="/login" />);

};

export default PrivateRoute;