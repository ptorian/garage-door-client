import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {FormGroup} from "react-bootstrap";

const UnwrappedLoginForm = (props: any) => (
    <form onSubmit={props.handleSubmit(props.onSubmit)}>
        {props.authSession.isError ? <p className="alert alert-danger">{props.authSession.errorMessage}</p> : ""}
        <h2>Please sign in</h2>
        <FormGroup>
            <Field name="username" component="input" className="form-control" type="text" placeholder="Username"
                   style={{maxWidth: "280px"}}/>
        </FormGroup>
        <FormGroup>
            <Field name="password" component="input" className="form-control" type="password"
                   placeholder="Password" style={{maxWidth: "280px"}}/>
        </FormGroup>
        <FormGroup>
            <button className="btn btn-primary" type="submit">Sign in</button>
        </FormGroup>
    </form>
);

// casted to <any> because reduxForm doesn't play nicely with other things
export const LoginForm: any = reduxForm({
    // a unique name for the form
    form: 'login'
})(UnwrappedLoginForm);