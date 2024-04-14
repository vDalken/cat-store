import styled from 'styled-components'

export const Div = styled.div`
  background: url('https://cdn.pixabay.com/photo/2024/02/28/07/42/european-shorthair-8601492_1280.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  color: #fff;
  font-size: 3rem;
`

export const Text = styled.div`
  color: #fff;
  font-size: var(--second-hsize);
  text-align: center;
  width: 30rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media screen and (max-width: 750px) {
    font-size: var(--p-size);
  }

  >h1{
    color: pink;
  }
`

