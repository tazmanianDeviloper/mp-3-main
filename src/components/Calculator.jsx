import { useState } from "react";
import styled from "styled-components";

const MainContent = styled.div`
    display: block;
    background-color: orange;
    text-align: center;
    align-items: center;
    padding: 20px;
`;

const Button = styled.button`
    background-color: red;
    margin: 5px;
`;

const Output = styled.h2`
    border: 5px solid #1d0030;
    padding: 10px;
`;

const Input = styled.input`
    margin: 10px;
    text-align: center;
`;

export default function Calculator() {
    const [firstNum, setFirstNum] = useState("");
    const [secondNum, setSecondNum] = useState("");
    const [output, setOutput] = useState("");

    function clearAll() {
        setFirstNum("");
        setSecondNum("");
        setOutput("");
    }

    function checkInputs() {
        if (isNaN(firstNum) || isNaN(secondNum)) {
            setOutput("At least one of the elements is not a number. Please make sure both inputs are numbers!");
            return true;
        }
        return false;
    }

    function addIt() {
        if (checkInputs()) return;
        const op1 = Number(firstNum);
        const op2 = Number(secondNum);
        setOutput(op1 + op2);
    }

    function subtractIt() {
        if (checkInputs()) return;
        const op1 = Number(firstNum);
        const op2 = Number(secondNum);
        setOutput(op1 - op2);
    }

    function multiplyIt() {
        if (checkInputs()) return;
        const op1 = Number(firstNum);
        const op2 = Number(secondNum);
        setOutput(op1 * op2);
    }

    function divideIt() {
        if (checkInputs()) return;
        const op1 = Number(firstNum);
        const op2 = Number(secondNum);
        setOutput(op1 / op2);
    }

    function exponentiateIt() {
        if (checkInputs()) return;
        const op1 = Number(firstNum);
        const op2 = Number(secondNum);
        let result = Math.pow(op1, op2);
        setOutput(result);
    }

    return (
        <MainContent>
            <label htmlFor="firstnumber" className="calc">1st Num:</label>
            <Input
                type="text"
                value={firstNum}
                onChange={(e) => setFirstNum(e.target.value)}
                id="firstnumber"
            />
            <br />
            <Button onClick={addIt}>+</Button>
            <Button onClick={subtractIt}>-</Button>
            <Button onClick={multiplyIt}>*</Button>
            <Button onClick={divideIt}>/</Button>
            <Button onClick={exponentiateIt}>^</Button>
            <Button onClick={clearAll}>Clear</Button>
            <br />
            <label htmlFor="secondnumber" className="calc">2nd Num:</label>
            <Input
                type="text"
                value={secondNum}
                onChange={(e) => setSecondNum(e.target.value)}
                id="secondnumber"
            />
            <br /><br />
            <Output>{output || "Result will be displayed here"}</Output>
        </MainContent>
    );
}
