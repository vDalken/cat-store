import { Pagination } from '../Pagination'
import { SleepingCat } from '../SleepingCat'
import { CatContainer, Div } from './styles'

export const Homepage = () => {
  return (
    <Div>
      <Pagination />
      <CatContainer>
        <SleepingCat />
      </CatContainer>
    </Div>
  )
}
