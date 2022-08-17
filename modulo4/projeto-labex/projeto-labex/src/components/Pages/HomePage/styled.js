import styled from "styled-components"

export const MainContainer = styled.div`
font-family: 'Kanit', sans-serif;
width: 100%;
`

export const Home = styled.div`
text-align: center;
padding-top: 150px;
font-size: 40px;
font-weight: bold;
color: #4D4D4D;
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