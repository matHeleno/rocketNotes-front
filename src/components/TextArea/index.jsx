import { Container } from "./styles";

// eslint-disable-next-line react/prop-types
export function TextArea({ value, ...rest}){
  return(
    <Container {...rest} >
      { value }
    </Container>
  )
}