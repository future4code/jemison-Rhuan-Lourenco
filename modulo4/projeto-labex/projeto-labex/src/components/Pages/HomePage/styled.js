import styled from "styled-components"

export const MainContainer = styled.div`
font-family: sans-serif;
width: auto;
height: 100vh;
background-image: url(https://i.pinimg.com/originals/62/02/b9/6202b931f3d654284e53d6a3e8616a4a.jpg);
`

export const Home = styled.div`
text-align: center;
padding-top: 150px;
font-size: 40px;
font-weight: bold;
color: white;
`

export const ButtonSection = styled.div`
display: flex;
justify-content: space-evenly;
text-align: center;
padding-top: 10%;
`

export const Button = styled.button`
border: none;
padding: 15px 40px;
border-radius: 20px;
background-color: #4D4D4D;
color: white;
font-size: 20px;
cursor: pointer;
&:hover{
  background-color: lightgray;
  color: black;
}
`