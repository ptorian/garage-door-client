import React from 'react'
import {connect} from "react-redux";

import {MainDashboard} from "../components/mainDashboard";

class UnwrappedMainDashboardContainer extends React.Component {
    props: any;

    render() {
        return (
            <MainDashboard authSession={this.props.authSession} />
        );
    }
}

export const MainDashboardContainer = connect((state: any) => ({authSession: state.authSession}), null, null, {pure: false})(UnwrappedMainDashboardContainer);