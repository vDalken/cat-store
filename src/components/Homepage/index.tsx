import { SleepingCat } from '../SleepingCat'
import { CatContainer, Div } from './styles'

export const Homepage = () => {
  return (
    <Div>
      <CatContainer>
        <SleepingCat />
      </CatContainer>
    </Div>
  )
}
