import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

// import AuthContext from '../Context/Auth/AuthContext';



const PrivateRoute = ({ component: Component, ...rest }) => {

    const userLogin = useSelector(state => state.userLogin)
    const {loading , error , userInfo} = userLogin

    // const authContext = useContext(AuthContext);
    // const { isAuthenticated } = authContext;
    return (
        <Route
            {...rest}
            render={props =>
                !localStorage.userInfo ? (
                    <Redirect to={{
                        pathname: '/login',
                    }}/>
                ) : (
                        <Component {...props} />
                    )
            }
        />
    );
};

export default PrivateRoute;
