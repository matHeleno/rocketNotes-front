import { useState } from "react";
import { Container, Form } from "./styles";

import { useNavigate } from "react-router-dom";

import { Link } from 'react-router-dom';

import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { TextArea } from "../../components/TextArea"
import { NoteItem } from "../../components/NoteItem"
import { Section } from "../../components/Section"
import { Button } from "../../components/Button"

import { api } from "../../services/api";

export function New() {
  
  const [title, setTitle] = useState("")
  
  const [description, setDescription] = useState("")

  const [links, setLinks] = useState([])
  const [newLink, setNewLink] = useState("")

  const [tags, setTags] = useState([])
  const [newTag, setNewTag] = useState("")

  const navigate = useNavigate()



  function handleAddLink() {
    setLinks(prevState => [...prevState, newLink])
    setNewLink("")
  }

  function handleRemoveLink(deleted) {
    setLinks(prevState => prevState.filter(link => link !== deleted))
  }

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag])
    setNewTag("")
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  async function handleNewNote() {

    if(!title) {
      return alert('Digite um título para a nota.')
    }

    if(!description) {
      return alert('Digite uma descrição para a nota.')
    }

    if(newLink) {
      return alert('Você esqueceu um link.')
    }

    if(newTag) {
      return alert('Você esqueceu uma tag.')
    }

    await api.post("/notes", {
      title,
      description,
      links,
      tags
    })

    alert("Nota criada com sucesso")
    navigate("/")
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">voltar</Link>
          </header>

          <Input
            placeholder='Título'
            type='text'
            onChange={e => setTitle(e.target.value)}
          />
          <TextArea 
            placeholder='Observações' 
            onChange={e => setDescription(e.target.value)}
          />

          <Section title={'Links úteis'}>
            {
              links.map((link, index) => (
                <NoteItem
                  key={String(index)}
                  value={link}
                  onClick={() => handleRemoveLink(link)}
                />
              ))
            }
            <NoteItem
              isNew
              placeholder="Novo link"
              value={newLink}
              onChange={e => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>

          <Section title='Marcadores'>
            <div className="tags">
              {
                tags.map((tag, index) => (
                  <NoteItem 
                  key={String(index)}
                    value={tag} 
                    onClick={() => handleRemoveTag(tag)}
                  />
                ))
              }
              <NoteItem 
                isNew 
                placeholder="Nova tag" 
                value={newTag}
                onChange={e => setNewTag(e.target.value)}
                onClick={handleAddTag}
              />
            </div>
          </Section>

          <Button 
            title='Salvar' 
            onClick={handleNewNote}
          />
        </Form>
      </main>
    </Container>
  )
}