import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
function App() {
return(
  <MainContainer>
           <Post
            nomeUsuario={'paulinha'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/200/150'}
          />
           <Post
            nomeUsuario={'astrodev'}
            fotoUsuario={'https://thepracticaldev.s3.amazonaws.com/i/6hqmcjaxbgbon8ydw93z.png'}
            fotoPost={'https://pbs.twimg.com/profile_images/1389789795065335809/A8H1fuQb_400x400.jpg'}
          />
            <Post
            nomeUsuario={'astrobot'}
            fotoUsuario={'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Gnome-stock_person_bot.svg/2048px-Gnome-stock_person_bot.svg.png'}
            fotoPost={'https://i0.wp.com/www.opuspesquisa.com/wp-content/uploads/2021/03/Sistema-bot-1.jpg?resize=992%2C558&ssl=1'}
          />

        </MainContainer>
)

}


export default App;
