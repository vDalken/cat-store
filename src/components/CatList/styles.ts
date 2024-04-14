import styled, { css } from 'styled-components'
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
  border: 16px solid #fff;
`

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  width: 100%;
  height: 2rem;
  transition: all 0.5s ease;
  background-color: #fff;

  > span {
    color: #000;
    opacity: 0.85;
  }

  > button {
    border: none;
    background-color: #fff;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    > svg {
      transform: scale(0.6);
    }
  }
`

export const Box = styled.div<{ $rotateAngle?: number }>`
  width: 20rem;
  height: 22rem;
  display: flex;
  border-radius: 1rem 1rem 1rem 1rem;
  flex-direction: column;

  transition: all.5s ease;
  transform: rotate(${props => props.$rotateAngle}deg);
  &:hover {
    background-color: var(--primary-background-color);
    transform: scale(1);

    ${Content} {
      opacity: 1;
    }
  }

  @media screen and (max-width: 750px) {
    transform: scale(.8);

    &:hover{
      transform: scale(.8);
      cursor: pointer;
    }
  }

  ${props =>
    props.$rotateAngle === -8 &&
    css`
      &::before {
        content: '';
        display: block;
        background-color: #fff;
        opacity: .6;
        width: 100px;
        height: 25px;
        position: absolute;
        top: -20px;
        left: -30px;
        transform: rotate(-24deg);
      }
    `}

    ${props => props.$rotateAngle === 8 && css`
    &::before {
        content: '';
        display: block;
        background-color: #fff;
        opacity: .6;
        width: 100px;
        height: 25px;
        position: absolute;
        top: -20px;
        left: -30px;
        transform: rotate(-24deg);
      }
    `}
`

export const ImageContainer = styled.div<ContainerProps>`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-image: center;
  background-position: center;
  background-size: cover;
  background-image: url(${(props) => props.$backgroundImage});
  background-color: var(--pods-color);
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
  cursor: default;
`
