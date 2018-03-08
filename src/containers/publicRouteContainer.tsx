import React from 'react';
import {connect} from "react-redux";
import {PublicRoute} from "../components/routeHelperComponents/publicRoute";

class UnwrappedPublicRouteContainer extends React.Component {
    props: any;

    render() {
        return (
            <PublicRoute isAuthenticated={this.props.authSession.isAuthenticated} {...this.props} />
        );
    }
}

export const PublicRouteContainer: any = connect((state: any) => ({authSession: state.authSession}))(UnwrappedPublicRouteContainer);