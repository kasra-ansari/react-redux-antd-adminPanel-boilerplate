import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import store from '../redux/store/index';

export const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        store.getState().isLogin ? (
            <Component {...props}/>
        ) : (
            <Redirect to={{
                pathname: '/',
                state: { from: props.location }
            }}/>
        )
    )}/>
);