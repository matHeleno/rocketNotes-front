/* eslint-disable react/jsx-no-target-blank */
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
    navigate(-1)
  }

  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente remover a nota?")
    if(confirm) {
      await api.delete(`/notes/${params.id}`)
      navigate(-1)
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)
    }
    fetchNote()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  console.log(data)
  return (

      <Container>
        <Header />
        
        {
          data && 
          <main>
            <Content>
              
              <ButtonText 
                title={"Excluir nota"}
                onClick={handleRemove}  
              />
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
                          <a href={link.url} target="_blank">
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