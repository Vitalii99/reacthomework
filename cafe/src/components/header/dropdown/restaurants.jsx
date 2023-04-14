import React from "react";
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const DropDownRestaurants = () => {
    return (
            <Nav>
                <NavDropdown
                    id="nav-dropdown-dark-example"
                    title="Ресторани"
                    menuVariant="dark"
                >
                    <NavDropdown.Item href="#action/3.1">Усі ресторани:</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        вул. ...
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">вул. ...</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                    вул. ...
                    </NavDropdown.Item>
                </NavDropdown>
            </Nav>
    )
} 