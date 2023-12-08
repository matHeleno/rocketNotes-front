import { RiShutDownLine} from 'react-icons/ri'

import { useAuth } from '../../hooks/auth';
import { useNavigate } from 'react-router-dom';

import { Container, Profile, Logout } from "./styles";

import { api } from "../../services/api"
import avatarPlaceHolder from "../../assets/avatar_placeholder.svg"

export function Header(){
  const { signOut, user } = useAuth()
  const navigate = useNavigate()

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder

  function handleSignOut() {
    navigate('/')
    signOut()
  } 

  return(
    <Container>
      <Profile to="profile">
        <img src={avatarUrl} alt={user.name} />

        <div>
          <span>Bem-vindo</span>
          <strong>{user.name}</strong>
        </div>
      </Profile>
      <Logout onClick={handleSignOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}