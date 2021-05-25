import React from 'react';
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavElements";

const index = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavContainer>
          <NavLogo to="/">logo</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to=".about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to=".contact-us">Contact Us</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to=".services">Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="sign-up">Sign Up</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="Sign-in">Sign In</NavBtnLink>
          </NavBtn>
        </NavContainer>
      </Nav>
    </>
  );
};

export default index;
