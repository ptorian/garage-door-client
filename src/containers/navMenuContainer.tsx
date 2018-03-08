import React from 'react'
import {connect} from "react-redux";

import {NavMenu} from "../components/navMenu/navMenu";

class UnwrappedNavMenuContainer extends React.Component {
    props: any;

    render() {
        return (
            <NavMenu authSession={this.props.authSession} />
        );
    }
}

export const NavMenuContainer = connect((state: any) => ({authSession: state.authSession}), null, null, {pure: false})(UnwrappedNavMenuContainer);