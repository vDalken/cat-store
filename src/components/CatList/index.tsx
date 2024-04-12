import { Cat } from '../../Cat'
import { CatPod } from '../CatPod'

interface CatListProps {
  cats: Cat[]
  page: number
  allCats:Cat[]
}

const CatList = ({ cats, page, allCats} :CatListProps) => {
  const startIndex = page === 1 ? 0 : (page -1) * 10

 
  return (
    <>
        {cats.map((cat, i) => (
          <CatPod cat={cat}  i={i} startIndex={startIndex} cats={allCats} key={i} onFavorite={() => {}}/>
      ))}
    </>
  )
}

export default CatList
