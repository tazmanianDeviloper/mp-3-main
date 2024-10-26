import styled from "styled-components";

const StyledHeading1 = styled.h1`
    font-size: calc(2.25vw + .5vh);
    margin-left: 2%;
    margin-right: 2%;
    text-align: center;
    text-align: left;
    @media screen and (max-width: 750px) {
        font-size: calc(5vw + .5vh);
        text-align: center;
    }
`
const StyledParagraph = styled.p`
    margin-left: 2%;
    margin-right: 2%;
    text-align: left;
    @media screen and (max-width: 750px) {
        text-align: center;
    }
`

const StyledHeader = styled.header`
    background-color: tomato;
    margin: 0% 0%;
`

export default function Header({headerinfo, paragraph}) {
     return (
        <StyledHeader>
            <StyledHeading1 className>{headerinfo}</StyledHeading1>
            <StyledParagraph className>{paragraph}</StyledParagraph>
        </StyledHeader>
     )
}