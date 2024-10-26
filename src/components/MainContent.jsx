import { styled } from "styled-components";

const StyledDiv = styled.div`
    margin-left: auto;
    margin-right: auto;
    font-size: calc(1.5vw + 0px);
    display: block;
    background-color: orange;
    text-align: center;
    align-items: center;
    width: 80%;

    & > h2 {
        font-size: calc(2.25vw + 0px);
    }
    @media screen and (max-width: 750px) {
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        display: inline;
    }
`
export default function MainContent({children}) {
    return (
        <StyledDiv>
            {children}
        </StyledDiv>
    )
}