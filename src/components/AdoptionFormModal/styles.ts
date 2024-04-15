import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  cursor: pointer;
`

export const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-radius: 0.2rem;
  max-width: 100%;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  > input {
    padding: 0.4rem;
    width: 260px;
    outline: none;
    background-color: rgba(0, 0, 0, 0.2);
    border: 2px solid transparent;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }

    &:focus {
      color: black;
      background-color: #fff;
      border: 2px solid #000;
    }
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const CustomTextarea = styled.textarea`
  padding: 1em;
  line-height: 1.4;
  resize: none;
  height: 106px;
  outline: none;
  background-color: rgba(0, 0, 0, 0.2);
  border: 2px solid transparent;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  &:focus {
    color: black;
    background-color: #fff;
    border: 2px solid #000;
  }
`

export const CloseButton = styled.button`
  width: 1.4rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
  position: absolute;
  top: 1rem;
  right: 1rem;
`

export const Form = styled.div`
    display: flex;
    gap: 1rem;
`

export const AdoptButton = styled.button`
    padding: .6em;
    color: #f5c6c6;
    background-color: #b77e75;
    border: none;
    cursor: pointer;

    &:hover{
        background-color: #f5c6c6;
        color: #b77e75;
    }
`

export const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: pink;
`