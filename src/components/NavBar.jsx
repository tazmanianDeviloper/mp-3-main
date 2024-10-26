import { styled } from 'styled-components'
import { Link } from "react-router-dom";


const StyledNav = styled.nav`
    display: block;
    width: 20%;
    display: column;
    margin-top: 10%;
    margin-bottom: 10%;
    background-color: orange;
    #navbar {
        align-items: center;
    }
    @media screen and (max-width: 750px) {
        width:100%;
        display:flex;
        justify-content: space-between;
        display: row;
        margin: auto;
        margin-top: 0%;
        margin-bottom: 0%;
    }
`

const StyledUl = styled.ul` 
    display: block; 
    list-style: none; 

    @media screen and (max-width: 750px) {
        display: flex;
        flex-direction: row
        margin-left:0%;
        margin-right:0%;
        // width:80%;
        align-items: center;
    }
`


const StyledLi = styled.li`
    border: solid darkorange 3px;
    padding: 5%;
    background-color: lightcoral;
    text-align: center;
    width: 80%vw;

    @media screen and (max-width: 750px) {
        border: solid darkorange 1px;
        padding: 2px;
        text-align: center;
        width: 100%;
    }
`

export default function NavBar() {
    return (
        <StyledNav>
            <StyledUl>
                <StyledLi><Link style={{textDecoration: "none", textalign: "center"}} to="/">Home</Link></StyledLi>
                <StyledLi><Link style={{textDecoration: "none", textalign: "center"}} to="/education">Education</Link></StyledLi>
                <StyledLi><Link style={{textDecoration: "none", textalign: "center"}} to="/experiences">Experiences</Link></StyledLi>
                <StyledLi><Link style={{textDecoration: "none", textalign: "center"}} to="/achievements">Achievements</Link></StyledLi>
                <StyledLi><Link style={{textDecoration: "none", textalign: "center"}} to="/references">References</Link></StyledLi>
                <StyledLi><Link style={{textDecoration: "none", textalign: "center"}} to="/projects">Projects</Link></StyledLi>
            </StyledUl>
        </StyledNav>
    )
}
