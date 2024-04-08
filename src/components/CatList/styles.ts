import styled from 'styled-components'
import { Link } from 'react-router-dom'

type ContainerProps = {
  $backgroundImage: string
}

export const CatCard = styled.div`
  width: 20rem;
  height: 20rem;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  cursor: pointer;

  overflow: hidden;
  position: relative;

  @media screen and (max-width: 750px) {
    transform: scale(0.8);
  }
`

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  width: 100%;
  height: 2rem;
  transition: all .5s ease;
`

export const Box = styled.div`
  width: 20rem;
  height: 22rem;
  display: flex;

  flex-direction: column;
  align-items: flex-start;
  transition: all.5s ease;

  &:hover {
    background-color: #fff;

    ${Content} {
      opacity: 1;
    }
  }
`

export const ImageContainer = styled.div<ContainerProps>`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-image: center;
  background-position: center;
  background-size: cover;
  background-image: url(${(props) => props.$backgroundImage});
  transition: transform 0.3s ease;
  position: absolute;
  top: 0;
  left: 0;

  &:hover {
    transform: scale(1.2);
  }
`

export const CatName = styled.p`
  font-size: x-large;
  text-align: center;
  color: var(--green);
  background-color: white;
  width: 100%;
  border-radius: 50% 50% 0 0;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`
