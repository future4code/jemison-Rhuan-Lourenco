import styled from "styled-components";

export const MainCotainer = styled.div`
  background-color: lightgray;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  background-color: white;
  min-width: 300px;
  max-width: 300px;
  min-height: 60%;
  padding: 12px;
`

export const Header = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-family: sans-serif;
    font-size: 20px;
`

export const Perfil = styled.div`
  display: flex;
  border: 1px solid black;
  flex-direction: column;
  height: 100%;
  width: 100%;
  margin-top: 10px;
  font-size: 15px;

  img{
  width: 300px;
  height: 350px;
  }
`

export const Button = styled.div`
  padding: 13px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-around;
`

export const BotaoMatch = styled.button`
  background-color: white;
  border: 1px solid black;
  border-radius: 20px;
  padding: 5px;
  cursor: pointer;
  &:hover {
    background-color: rgba(100, 100, 100, 0.5);
  }
`

export const BotaoLike = styled.button`
  padding: 20px;
  border-radius: 40%;
  border: 1px solid green;
  transition: 0.2s linear;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 255, 0, 0.5);
  }
`

export const BotaoDislike = styled.button`
  padding: 20px;
  border-radius: 40%;
  border: 1px solid red;
  transition: 0.2s linear;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 0, 0, 0.5);
  }
`