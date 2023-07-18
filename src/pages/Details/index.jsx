import { Container, Links } from "./style"

import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText"

export function Details() {
  return (
      <Container>
        <Header />
        <ButtonText title={"Excluir nota"}/>
        <Section title={"Links Úteis"}>
          <Links>
            <li><a href="#">Item 1</a></li>
            <li><a href="#">Item 1</a></li>
          </Links>
        </Section>

        <Section title={"Marcadores"}>
          <Tag title={"Express"}></Tag>
          <Tag title={"Node"}></Tag>
        </Section>

        <Button title="Voltar"/>

      </Container>
  )
}