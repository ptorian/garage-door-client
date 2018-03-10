import React from 'react'
import {MenuItem, Nav, Navbar, NavDropdown, NavItem} from "react-bootstrap";
import LinkContainer from "react-router-bootstrap/lib/LinkContainer";

import NavMenuLoginLink from "./navMenuLoginLink";
import NavMenuLogOutLinkContainer from "../../containers/navMenuLogOutLinkContainer";

const NavMenu = (props: any) => (
    <Navbar>
        <Nav>
            <LinkContainer to="/home">
                <NavItem>
                    Home
                </NavItem>
            </LinkContainer>
            {props.authSession.isAuthenticated ? <NavMenuLogOutLinkContainer/> : <NavMenuLoginLink/>}
        </Nav>
    </Navbar>
);

export default NavMenu;