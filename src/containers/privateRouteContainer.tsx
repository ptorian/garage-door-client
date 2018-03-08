import React from 'react';
import {connect} from "react-redux";
import {PrivateRoute} from "../components/routeHelperComponents/privateRoute";

class UnwrappedPrivateRouteContainer extends React.Component {
    props: any;

    render() {
        return (
            <PrivateRoute isAuthenticated={this.props.authSession.isAuthenticated} {...this.props} />
        );
    }
}

export const PrivateRouteContainer: any = connect((state: any) => ({authSession: state.authSession}))(UnwrappedPrivateRouteContainer);