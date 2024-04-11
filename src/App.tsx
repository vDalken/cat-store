import { Route, Routes } from 'react-router-dom'
import { Homepage } from './components/Homepage'
import { GlobalStyle } from './styles'
import { NavigationBar } from './components/NavigationBar'
import catsData from './assets/data/cat_data.json'
import Shop from './components/Shop'
import { Pagination } from './components/Pagination'
import CatDescription from './components/CatDescription'
import { Footer } from './components/Footer'
import { Error } from './components/Error'
import { Favorites } from './components/Favorites'
import { useState } from 'react'
import { Cat } from './Cat'

export const App: React.FC = () => {
  const [catsArray, setCatsArray] = useState<Array<Cat>>(Object.values(catsData))
  
  const totalCats = catsArray.length
  const totalPages = Math.ceil(totalCats / 10)
  const [favoriteCats, setFavoriteCats] = useState<Array<number>>([]);

  const [currentShopUrl, setCurrentShopUrl] = useState("")
  const [currentCatUrl, setCurrentCatUrl] = useState("")

  const [isAtCats, setIsAtCats] = useState(false)


  return (
    <>
      <GlobalStyle />
      <NavigationBar currentShopUrl={currentShopUrl} currentCatUrl={currentCatUrl} isAtCats={isAtCats}/>
      <Routes>
        <Route path="/" element={<Homepage setIsAtCats={setIsAtCats}/>} />
        <Route path="/cat-store" element={<Homepage setIsAtCats={setIsAtCats} />} />
        {[...Array(totalPages)].map((_, index) => (
          <Route
            key={index + 1}
            path={`shop/page${index + 1}`}
            element={
              <>
                <Shop cats={catsArray} page={index + 1} setCurrentUrl={setCurrentShopUrl} favoriteCats={favoriteCats} setCatsArray={setCatsArray}/>
                <Pagination
                  currentPage={index + 1}
                  totalPages={totalPages}
                  previousButtonText="Previous"
                  nextButtonText="Next"
                  partialRoute="/shop/page"
                />
              </>
            }
          />
        ))}
        {catsArray.map((_, i) => (
          <Route
            key={i}
            path={`/cat/${i+1}`}
            element={
              <>
                <CatDescription id={i.toString()} setCurrentUrl={setCurrentCatUrl} setIsAtCats={setIsAtCats}/>
                <Pagination 
                  currentPage={i+1}
                  totalPages={totalCats}
                  previousButtonText='Previous Cat'
                  nextButtonText='Next Cat'
                  partialRoute='/cat/'
                />
              </>
            }
          />
        ))}
        <Route path='/favorites' element={<Favorites catsArray={catsArray} favoriteCats={favoriteCats} setFavoriteCats={setFavoriteCats} setCatsArray={setCatsArray}/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      <Footer />
    </>
  )
}
