import { Container } from "./styles";

// eslint-disable-next-line react/prop-types
export function Button({ title, loading }) {
  return (
    <Container 
      type="button"
      disabled={loading}
    >
      {loading ? 'Carregando...' : title}
    </Container>
  )
}