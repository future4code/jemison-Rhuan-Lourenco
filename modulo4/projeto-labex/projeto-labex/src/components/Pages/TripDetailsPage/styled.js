import styled from "styled-components";

export const MainContainer = styled.div`
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
`

export const Card = styled.div`
    padding: 40px;
    margin: 30px 0px;
    width: 50%;
    box-shadow: 0px 8px 16px 0px;
    background-color: lightgray;
    color: black;
`;

export const CardCandidate = styled.div`
    margin: 30px 0px;
    padding: 40px;
    width: 500px;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 0px 8px 16px 0px;
    background-color: lightgray;
`;

export const Header = styled.h1`
  display: flex;
  justify-content: column;
  color: white;
  padding: 20px;
  font-size: 40px;
`;

export const Description = styled.div`
    margin-right: 5px;
    font-weight: bold;
    color: black;
`

export const Post = styled.div`
    display: flex;
    padding: 7px;
    font-size: 20px;
    color: black;
`
export const Button = styled.button`
    border: none;
    padding: 15px 40px;
    border-radius: 20px;
    background-color: #4D4D4D;
    color: white;
    font-size: 20px;
    margin: 0px 50px;
    cursor: pointer;
    &:hover{
        background-color: lightgray;
        color: black;
    }
`