import { Cat } from '../../Cat'
import { CatPod } from '../CatPod'

interface CatListProps {
  cats: Cat[]
  allCats:Cat[]
}

const CatList = ({ cats, allCats} :CatListProps) => { 
  return (
    <>
        {cats.map((cat, i) => (
          <CatPod cat={cat}  i={i} cats={allCats} key={i} />
      ))}
    </>
  )
}

export default CatList
