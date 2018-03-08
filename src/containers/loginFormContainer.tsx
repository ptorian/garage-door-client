import React from 'react'
import {connect} from "react-redux";
import {submitAuth} from "../actions/authActions";
import {bindActionCreators} from "redux";
import {LoginForm} from "../components/loginForm";

class LoginFormValues {
    username: string;
    password: string;
}

class UnwrappedLoginFormContainer extends React.Component {
    props: any;

    async onSubmit(values: LoginFormValues) {
        await this.props.actions.submitAuth(values.username, values.password);
    };

    render() {
        return (
            <LoginForm onSubmit={this.onSubmit.bind(this)} authSession={this.props.authSession} />
        );
    }
}

export const LoginFormContainer = connect((state: any) => ({authSession: state.authSession}), dispatch => ({actions: bindActionCreators({submitAuth}, dispatch)}))(UnwrappedLoginFormContainer);