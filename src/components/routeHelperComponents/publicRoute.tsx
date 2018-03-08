import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export const PublicRoute = (props: any) => {
    if (props.isAuthenticated) {
        return (<Redirect to="/home" />);
    } else {
        return (<Route {...props} />);
    }
};