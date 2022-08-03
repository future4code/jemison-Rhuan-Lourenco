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
    justify-content: center;
    font-family: sans-serif;
    font-size: 20px;
`

export const Botoes = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 13px;
`;

export const PerfilMatch = styled.div`
  display: flex;
  border: 1px solid black;
  text-align: center;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;
`

export const Foto = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
`

export const BotaoMatch = styled.button`
  background-color: white;
  border: 1px solid black;
  padding: 6px;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: rgba(100, 100, 100, 0.5);
  }
`