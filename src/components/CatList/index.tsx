import { Cat } from '../../Cat'
import { CatPod } from '../CatPod'

interface CatListProps {
  cats: Cat[]
  page: number
  allCats:Cat[]
  favoriteCats: Array<number>
  setCatsArray: (array: Array<Cat>) => void
}

const CatList = ({ cats, page, allCats, favoriteCats, setCatsArray} :CatListProps) => {
  const startIndex = page === 1 ? 0 : (page -1) * 10
 
  return (
    <>
        {cats.map((cat, i) => (
        <CatPod cat={cat}  i={i} startIndex={startIndex} cats={allCats} favoriteCats={favoriteCats} setCatsArray={setCatsArray} key={i}/>
      ))}
    </>
  )
}

export default CatList
