import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledFooter = styled.footer`
    // display: inline-block; 
    // text-align: center;
    background-color: tomato;
`

const Nav = styled.nav`
    display: inline-block; 
    align-items: center;
`
const StyledP = styled.p`
    align-items: center;
`

export default function Footer() {
    return (
        <StyledFooter>
            <StyledP>
            <span>All Rights Reserved by Sean Lin </span>
            <Nav>
                <Link style={{textDecoration: "none", textalign: "center"}} to="/credits">Credits</Link>
            </Nav>
            <span> ©</span>
            </StyledP>
        </StyledFooter>
    );
}