import { styled } from "styled-components";
import { Link } from "react-router-dom";

const Styleddiv = styled.div`
    background-color: red;
    display: flex; 
    width: 80%;
    margin: auto; /* Centers the div */
    justify-content: space-between; /* Optional: Adds space between the child divs */
`;

const Stylednav = styled.nav`
    display: inline;
    width: 20%;
    background-color: orange;
`;

const FirstDiv = styled.div`
    width: 20%; /* Adjusted width */
    background-color: black;
`;

const SecondDiv = styled.div`
    width: 80%; /* Adjusted width */
    background-color: orange;
`;

export default function Other() {
    return (
        <Styleddiv>
            <FirstDiv>
                <ul>
                    <li><Link to="/education">Education</Link></li>
                </ul>
            </FirstDiv>
            <SecondDiv>
                <p>Hey!</p>
            </SecondDiv>
        </Styleddiv>
    );
}
