import { Div, MessageContainer } from './styles'

export const Error = () => {
 
  return (
    <>
      <Div>
        <MessageContainer>
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>
            <i>The page you're trying to find doesn't exist.</i>
          </p>
        </MessageContainer>
      </Div>
    </>
  )
}
