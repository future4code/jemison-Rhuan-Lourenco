import styled from "styled-components"

export const MainContainer = styled.div`
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  height: 90vh;
  padding: 50px;
  background-image: url(https://i.pinimg.com/originals/62/02/b9/6202b931f3d654284e53d6a3e8616a4a.jpg);
`

export const ButtonSection = styled.div`
  display: flex;
  justify-content: center;
`

export const Button = styled.button`
  margin-right: 10px;
  border: none;
  padding: 15px 40px;
  border-radius: 20px;
  background-color:  #4D4D4D;
  color: white;
  font-size: 20px;
  cursor: pointer;
  &:hover{
    background-color: lightgray;
    color: black;
  }
`

export const Text = styled.h1`
  text-align: center;
  color: white;
  font-size: 40px;
  font-weight: bold;
`

export const Card = styled.div`
  display: flex;
  box-shadow: 0px 8px 16px 0px;
  align-items: center;
  padding: 20px;
  justify-content: space-between;
  background-color: lightgray;
  width: 30%;
`

export const DeleteButton = styled.div`
  background-color: #4D4D4D;
  border: 1px solid black;
  color: red;
  cursor: pointer;
  padding: 15px;
  border-radius: 20px;
  &:hover{
    background-color: red;
    color: black;
  }
`