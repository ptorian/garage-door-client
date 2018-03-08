import React from 'react'
import {NavItem} from "react-bootstrap";

export const NavMenuLogOutLink = (props: any) => (
    <NavItem onClick={props.logout}>
        Log out
    </NavItem>
);