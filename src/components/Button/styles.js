import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  background-color: ${({theme}) => theme.COLORS.ORANGE};
  color: ${({theme}) => theme.COLORS.BACKGROUND_800};

  height: 5.6rem;
  border: 0;
  padding: 0 1.6rem;
  margin-top: 1.6rem;
  border-radius: 1rem;
  font-weight: 500;

  font-family: 'Roboto Slab', serif;
  font-size: 1.6rem;

  &:disabled {
    opacity: 0,5;
  }
`