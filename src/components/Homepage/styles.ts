import styled from 'styled-components'

export const Div = styled.div`
  background-color: var(--blue);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Text = styled.div`
  color: #fff;
  font-size: var(--second-hsize);
  text-align: center;

  @media screen and (max-width: 750px) {
    font-size: var(--p-size);
  }
`

export const CatContainer = styled.div`
  max-width: 100%;
`
