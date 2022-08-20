import styled from "styled-components";

export const MainContainer = styled.div`
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(https://i.pinimg.com/originals/62/02/b9/6202b931f3d654284e53d6a3e8616a4a.jpg);
`

export const Header = styled.div`
    text-align: center;
    padding: 20vh;
    font-size: 40px;
    font-weight: bold;
    color: white;
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

export const Card = styled.div`
    padding: 40px;
    margin-top: 30px;
    width: 50%;
    box-shadow: 0px 8px 16px 0px;
    background-color: lightgray;
`

export const Description = styled.div`
    margin-right: 5px;
    font-weight: bold;
`

export const Post = styled.div`
    display: flex;
    flex-direction: row;
    padding: 7px;
    font-size: 20px;
`