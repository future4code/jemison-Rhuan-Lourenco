import styled from "styled-components";

export const MainContainer = styled.div`
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
`;

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 40px;
    font-weight: bold;
    color: white;
`;

export const Button = styled.button`
    border: none;
    padding: 15px 40px;
    border-radius: 20px;
    background-color: #4D4D4D;
    color: white;
    font-size: 20px;
    margin: 20px 50px;
    cursor: pointer;
    &:hover{
        background-color: lightgray;
        color: black;
    }
`

export const Input = styled.input`
    width: 475px;
    padding: 10px;
    background-color: lightgray;
    border-radius: 10px;
`

export const Select = styled.select`
    width: 500px;
    padding: 10px;
    background-color: lightgray;
    border-radius: 10px;
    margin-top: 20px;
`