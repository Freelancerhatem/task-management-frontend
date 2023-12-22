import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth/useAuth";
import PropTypes from 'prop-types';

const PrivateRoute = ({children}) => {
    const{loading,user}=useAuth();
    
    if (loading){
        return 'loading'
    }
    else if(!user){
      return  <Navigate to={'/login'}></Navigate>
    }
    else{
        return children
    }
};
PrivateRoute.propTypes = {
    children:PropTypes.node
};
export default PrivateRoute;

