import { Link } from "react-router-dom";
import { styled } from "styled-components";
import Header from "./Header";
import Footer from "../components/Footer";
import NavBar from "./NavBar";
import MainContent from "./MainContent";


const WrapperDiv = styled.div`
    font-size: calc(1.5vw + 0px);
    border: 6px solid black;
    margin-left: 20%;
    margin-right: 20%;
    background-color: darkorange;
    @media screen and (max-width: 750px) {
        font-size: calc(.5vw + .5vh);
        border: 2px solid black;
        margin-left: 5%;
        margin-right: 5%;
    }
`



const BodyContent = styled.div`
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 750px) {
        display: flex;
        flex-direction: column;
    }
`




export default function PageLayout({headerinfo, paragraph, children}) {
    return (
        <WrapperDiv>
                <Header headerinfo={headerinfo} paragraph={paragraph}></Header>
                <BodyContent>
                    <NavBar />
                    <MainContent children={children}>
                    </MainContent>
                </BodyContent>
                <Footer />
        </WrapperDiv>
    )
}