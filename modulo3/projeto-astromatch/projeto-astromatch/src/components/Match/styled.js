import styled from "styled-components";

export const MainCotainer = styled.div`
  background-color: lightgray;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Card = styled.div`
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
    padding-bottom: 10px;
`

export const PerfilMatch = styled.div`
  display: flex;
  text-align: center;
  justify-content: space-between;
  align-items: center;
  font-family: sans-serif;
  font-size: 20px;
  padding: 10px 10px;

  img{
    width: 20%;
    height: 60px;
    border-radius: 20%;
  }
`

export const Foto = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
`

export const BotaoHome = styled.button`
  background-color: white;
  border: 1px solid black;
  border-radius: 20px;
  cursor: pointer;
  &:hover {
    background-color: rgba(100, 100, 100, 0.5);
  }
`