import React from "react";
import { connect, styled } from "frontity";
import Link from "@frontity/components/link";
import Nav from "./nav";
import MobileMenu from "./menu";
import logo from "../../images/logo.svg";
import Button from "./buttons";


const TopNavbar = ({ state }) => (
    <TopNavContainer>
        <Logo>
          <Link link="/" alt="Forside link">
            <img src={logo} alt="logo" width="120px" height="40px" />
          </Link>
        </Logo>
        <Nav />
        <Button />
        <MobileMenu />
    </TopNavContainer>
);

export default connect(TopNavbar);

const TopNavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 1rem;
    background-color: #fff;
`;

const Logo = styled.div`
    width: 120px;
    height: 40px;
`;