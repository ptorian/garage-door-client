import React from 'react'
import {NavItem} from "react-bootstrap";
import LinkContainer from "react-router-bootstrap/lib/LinkContainer";

export const NavMenuLoginLink = () => (
    <LinkContainer to="/login">
        <NavItem>
            Login
        </NavItem>
    </LinkContainer>
);