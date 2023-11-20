import { Container, Profile, Logout } from './styles';
import { RiShutDownLine } from 'react-icons/ri';

export function Header(){
  return (
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/newtoncelio.png" 
        alt="Foto do Usuário" />

        <div>
          <span>Bem-vindo</span>
          <strong>Newton Célio</strong>
        </div>
      </Profile>  

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}