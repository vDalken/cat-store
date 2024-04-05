import { Cat } from '../../Cat'
import CatList from '../CatList'
import { Div } from './styles'

interface ShopProps {
  cats: Cat[]
  page: number
}

const Shop = ({ cats, page }: ShopProps) => {
  const startIndex = (page - 1) * 10
  const endIndex = page * 10
  const catsOnPage = cats.slice(startIndex, endIndex)

  return (
    <>
      <Div>
        <CatList cats={catsOnPage} page={page}/>
      </Div>
    </>
  )
}

export default Shop
