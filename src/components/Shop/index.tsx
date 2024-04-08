import { useLocation } from 'react-router-dom'
import { Cat } from '../../Cat'
import CatList from '../CatList'
import { Div } from './styles'
import { useEffect } from 'react'

interface ShopProps {
  cats: Cat[]
  page: number
  setCurrentUrl: (url: string) => void;
}

const Shop = ({ cats, page,setCurrentUrl }: ShopProps) => {
  const startIndex = (page - 1) * 10
  const endIndex = page * 10
  const catsOnPage = cats.slice(startIndex, endIndex)
  const location = useLocation()

  useEffect(()=>{
    setCurrentUrl(location.pathname)
  },[location.pathname,setCurrentUrl])

  return (
    <>
      <Div>
        <CatList cats={catsOnPage} page={page}/>
      </Div>
    </>
  )
}

export default Shop
