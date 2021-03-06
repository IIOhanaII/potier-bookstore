import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCart } from "../features/cartSlice";

export const Header = () => {
  const cart = useSelector(selectCart);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Navbar color="dark" dark expand="sm">
        {window.screen.width > 360 ? (
          <NavbarBrand href="/" className="ms-3">
            La bibliothèque d'Henri Potier
          </NavbarBrand>
        ) : (
          <NavbarBrand href="/" className="ms-3">
            Henri Potier
          </NavbarBrand>
        )}
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink className="nav-link" to="/bookstore">
                Livres
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/cart">
                Panier ({cart.length})
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
