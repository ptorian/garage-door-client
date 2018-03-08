import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export const PrivateRoute = (props: any) => {
    if (!props.isAuthenticated) {
        return (<Redirect to="/login" />);
    } else {
        return (<Route {...props} />);
    }
};