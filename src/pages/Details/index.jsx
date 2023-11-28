import { useEffect, useState} from "react"
import { Container, Links, Content } from "./style"
import { useParams, useNavigate } from "react-router-dom";

import { api } from "../../services/api"

import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText"

export function Details() {
  const params = useParams()
  const navigate = useNavigate()
  
  const [data, setData] = useState(null)
  
  function handleBack() {
    navigate(`/`)
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }
    fetchNote()
  }, [])
  
  console.log(data)
  return (

      <Container>
        <Header />
        
        {
          data && 
          <main>
            <Content>
              
              <ButtonText title={"Excluir nota"}/>
              <h1>
                {data.title}
              </h1>
              <p>
                {data.description}
              </p>
              
              {
                data.links && 
                <Section title={"Links Úteis"}>
                  <Links>
                    {
                      data.links.map(link => (
                        <li key={String(link.id)}>
                          <a href={link.url}>
                            {link.url}
                          </a>
                        </li>
                      ))
                    }
                  </Links>
                </Section>
              }
              
              {
                data.tags &&
                <Section title={"Marcadores"}>
                  {
                    data.tags.map(tag => (
                      <Tag key={tag.id} title={tag.name}></Tag>
                    ))
                  }
                </Section>
              }
                

              <Button title="Voltar" onClick={handleBack}/>

            </Content>
          </main>
        }

      </Container>
  )
}