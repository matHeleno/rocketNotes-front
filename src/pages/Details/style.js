import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  display: grid;
  grid-template-rows: 10.5rem auto;
  grid-template-areas: 
  "header"
  "content";

  > main {
    grid-area: content;
    overflow-y: scroll;
    padding: 6.4rem 0;
  }
`

export const Links = styled.ul`
  list-style: none;

  > li {
    margin-top: 1.2rem;
  
    a {
      color: ${({theme}) => theme.COLORS.WHITE};
      font-size: 1.6rem;
    }
  }
`

export const Content = styled.div`
  max-width: 55rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  > button:first-child{
    align-self: end;
  }

  > h1 {
    font-family: Roboto Slab;
    font-size: 3.6rem;
    font-weight: 500;

    padding-top: 6.4rem;
  }

  > p {
    text-align: justify;
    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;

    margin-top: 1.6rem;
  }
`