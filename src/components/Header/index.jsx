import { RiShutDownLine} from 'react-icons/ri'

import { Container, Profile, Logout } from "./styles";

export function Header(){
  return(
    <Container>
      <Profile>
        <img src="https://github.com/matHeleno.png" alt="foto do usuário" />

        <div>
          <span>Bem-vindo</span>
          <strong>Matheus Heleno</strong>
        </div>
      </Profile>
      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}