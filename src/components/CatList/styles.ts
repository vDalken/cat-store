import styled from 'styled-components'
import { Link } from 'react-router-dom'

type ContainerProps = {
  $backgroundImage: string
}

export const CatCard = styled.div<ContainerProps>`
  width: 20rem;
  height: 20rem;
  background-repeat: no-repeat;
  background-image: center;
  background-position: center;
  background-image: url(${(props) => props.$backgroundImage});
  display: flex;
  justify-content: center;
  align-items: flex-end;
  cursor: pointer;
  border-radius: 0.5rem;
  box-shadow: 2px 2px 10px var(--black);

  &:hover{
    border: 2px solid var(--green);
  }

  @media screen and (max-width: 750px) {
    transform: scale(.8);
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
`;