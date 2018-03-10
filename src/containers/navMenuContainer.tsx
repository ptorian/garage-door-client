import React from 'react'
import {connect} from "react-redux";

import NavMenu from "../components/navMenu/navMenu";

class NavMenuContainer extends React.Component {
    props: any;

    render() {
        return (
            <NavMenu authSession={this.props.authSession} />
        );
    }
}

export default connect((state: any) => ({authSession: state.authSession}), null, null, {pure: false})(NavMenuContainer);