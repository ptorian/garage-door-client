import React from 'react';
import {connect} from "react-redux";
import PrivateRoute from "../components/routeHelperComponents/privateRoute";

class PrivateRouteContainer extends React.Component {
    props: any;

    render() {
        return (
            <PrivateRoute isAuthenticated={this.props.authSession.isAuthenticated} {...this.props} />
        );
    }
}

export default connect((state: any) => ({authSession: state.authSession}))(PrivateRouteContainer) as any;