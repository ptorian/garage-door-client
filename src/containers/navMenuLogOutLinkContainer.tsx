import React from 'react'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {logout} from "../actions/authActions";
import {NavMenuLogOutLink} from "../components/navMenu/navMenuLogOutLink";

class UnwrappedNavMenuLogOutLinkContainer extends React.Component {
    props: any;

    render() {
        return (
            <NavMenuLogOutLink logout={this.props.actions.logout} />
        );
    }
}

export const NavMenuLogOutLinkContainer = connect(null, dispatch => ({actions: bindActionCreators({logout}, dispatch)}))(UnwrappedNavMenuLogOutLinkContainer);