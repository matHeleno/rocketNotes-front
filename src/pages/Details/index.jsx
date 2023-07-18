import { Container } from "./style"
import { Button } from "../../components/Button"

export function Details() {
  return (
    <>
      <Container>
        <h1>Hello, World!</h1>
        <span>Matheus Heleno</span>
      </Container>
      <Button title="Entrar"/>
      <Button title="Cadastrar"/>
      <Button title="Voltar"/>
    </>
  )
}