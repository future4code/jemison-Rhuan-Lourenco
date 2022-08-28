import styled from "styled-components";

export const MainContainer = styled.div`
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    font-size: 20px;
`

export const Card = styled.div`
    padding: 40px;
    margin: 30px 0px;
    width: 50%;
    box-shadow: 0px 8px 16px 0px;
    background-color: lightgray;
    color: black;
    border-radius: 10px;
`;

export const CardCandidate = styled.div`
    margin: 30px 0px;
    padding: 40px;
    width: 600px;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 0px 8px 16px 0px;
    background-color: lightgray;
    border-radius: 20px;
`;

export const ApprovedButton = styled.button`
    border: none;
    padding: 4px 20px;
    border-radius: 20px;
    background-color: #4D4D4D;
    color: white;
    font-size: 20px;
    cursor: pointer;
    &:hover{
        background-color: green;
        color: black;
    }
`

export const DisapprovedButton = styled.button`
    border: none;
    padding: 4px 20px;
    border-radius: 20px;
    background-color: #4D4D4D;
    color: white;
    font-size: 20px;
    cursor: pointer;
    &:hover{
        background-color: red;
        color: black;
    }
`
export const SectionButton = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 20px;
`

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
    margin: 20px 50px;
    cursor: pointer;
    &:hover{
        background-color: lightgray;
        color: black;
    }
`

export const ListCandidates = styled.p`
    color: white;
    font-weight: bold;
    font-size: 30px;
`

export const ApprovedCandidates = styled.div`
    margin: 20px 0px;
    padding: 30px;
    width: 600px;
    margin-left: auto;
    margin-right: auto;
    background-color: lightgray;
    border-radius: 20px;
    color: black;
`