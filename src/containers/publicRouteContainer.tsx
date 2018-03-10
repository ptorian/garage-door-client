import React from 'react';
import {connect} from "react-redux";
import PublicRoute from "../components/routeHelperComponents/publicRoute";

class PublicRouteContainer extends React.Component {
    props: any;

    render() {
        return (
            <PublicRoute isAuthenticated={this.props.authSession.isAuthenticated} {...this.props} />
        );
    }
}

export default connect((state: any) => ({authSession: state.authSession}))(PublicRouteContainer) as any;