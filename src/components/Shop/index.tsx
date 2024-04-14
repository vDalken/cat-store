import { useLocation, useParams } from 'react-router-dom'
import CatList from '../CatList'
import { Div } from './styles'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import { setCurrentShopUrl } from '../../features/urlSlice'

const Shop = () => {
  const { pageNumber, catRace } = useParams<{ pageNumber: string, catRace?: string }>();
  const page = parseInt(pageNumber || '1');
  const startIndex = (page - 1) * 10
  const endIndex = page * 10
  const cats = useSelector((state: RootState) => state.cats.catsArray)
  let filteredCats = cats;

   if (catRace) {
    filteredCats = cats.filter(cat => cat.race === catRace);
  }
  
  const catsOnPage = filteredCats.slice(startIndex, endIndex)
  const location = useLocation()
  const dispatch = useDispatch()

  useEffect(()=>{
    if(!catRace){
      dispatch(setCurrentShopUrl(location.pathname))
    }
  },[location.pathname,dispatch,catRace])

  return (
    <>
      <Div>
        <CatList cats={catsOnPage} allCats={cats}/>
      </Div>
    </>
  )
}

export default Shop
