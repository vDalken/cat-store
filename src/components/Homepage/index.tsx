import { SleepingCat } from '../SleepingCat'
import { CatContainer, Div, Text } from './styles'

export const Homepage = () => {
  return (
    <Div>
      <Text>
        <h1>Welcome to Purr-fect - Your favorite store in the world! This is where you'll find you furry friend.</h1>
      </Text>
      <CatContainer>
        <SleepingCat />
      </CatContainer>
    </Div>
  )
}
