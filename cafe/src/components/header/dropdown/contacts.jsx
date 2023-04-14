import React from "react";
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const DropDownContacts = () => {
    return (
            <Nav>
                <NavDropdown
                    id="nav-dropdown-dark-example"
                    title="Контакти"
                    menuVariant="dark"
                >
                    <NavDropdown.Item href="#action/3.1">Служба доставки:</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        тел.: (044) 377-73-55
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Написати відгук</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        Відстежити замовлення
                    </NavDropdown.Item>
                </NavDropdown>
            </Nav>
    )
} 