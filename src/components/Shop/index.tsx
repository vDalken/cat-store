import { useLocation, useParams } from 'react-router-dom'
import CatList from '../CatList'
import { Div } from './styles'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import { setCurrentShopUrl } from '../../features/urlSlice'

const Shop = () => {
  const { pageNumber } = useParams<{ pageNumber: string }>();
  const page = parseInt(pageNumber || '1');
  const startIndex = (page - 1) * 10
  const endIndex = page * 10
  const cats = useSelector((state: RootState) => state.cats.catsArray)
  const catsOnPage = cats.slice(startIndex, endIndex)
  const location = useLocation()
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(setCurrentShopUrl(location.pathname))
  },[location.pathname,dispatch])

  return (
    <>
      <Div>
        <CatList cats={catsOnPage} page={page} allCats={cats} />
      </Div>
    </>
  )
}

export default Shop
