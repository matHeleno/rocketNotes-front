import { FiPlus } from 'react-icons/fi'
import { Container, Brand, Menu, Search, Content, NewNote } from './styles'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Note } from '../../components/Note'
import { ButtonText } from '../../components/ButtonText'
import { Section } from '../../components/Section'

export function Home() {
  return(
    <Container>
      
      <Brand>
        <h1>RocketNotes</h1>
      </Brand>
      
      <Header />

      <Menu>
        <li>
          <ButtonText title='Todos'$isactive={true}/>
        </li>
        <li>
          <ButtonText title='Todos'$isactive={false}/>
        </li>
        <li>
          <ButtonText title='Todos'$isactive={false}/>
        </li>
      </Menu>
      
      <Search>
        <Input placeholder='Pesquisar pelo título'/>
      </Search>

      <Content>
        <Section title='Minhas Notas'>
          <Note data={{
            title: 'React',
            tags: [
              {id: '1', name: 'React'},
              {id: '2', name: 'RocketSeat'}
            ]
          }}
          />
        </Section>
      </Content>

      <NewNote>
        <FiPlus/>
        Criar Nota
      </NewNote>

    </Container>
  )
}