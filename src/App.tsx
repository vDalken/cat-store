import { Route, Routes } from 'react-router-dom'
import { Homepage } from './components/Homepage'
import { GlobalStyle } from './styles'
import { NavigationBar } from './components/NavigationBar'
import Shop from './components/Shop'
import { Pagination } from './components/Pagination'
import CatDescription from './components/CatDescription'
import { Footer } from './components/Footer'
import { Error } from './components/Error'
import { Favorites } from './components/Favorites'
import { useSelector } from 'react-redux'
import { RootState } from './app/store'

export const App: React.FC = () => {
  const totalCats = useSelector((state: RootState) => state.cats.totalCats)
  const totalPages = useSelector((state: RootState) => state.cats.totalPages)
  const selectedCat = useSelector((state: RootState) => state.cats.selectedCatRace) 
  const catsArray = useSelector((state: RootState) => state.cats.catsArray)
  const totalPagesOfRace = catsArray.filter(cat => cat.race === selectedCat)
  const totalNumberOfFavoriteCats = useSelector(
    (state: RootState) => state.cats.totalNumberOfFavoriteCats
  )

  return (
    <>
      <GlobalStyle />
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cat-store" element={<Homepage />} />
        <Route
          path="/shop/page/:pageNumber"
          element={
            <>
              <Shop />
              <Pagination
                totalPages={totalPages}
                previousButtonText="Previous"
                nextButtonText="Next"
                partialRoute="/shop/page/"
                paramName="pageNumber"
              />
            </>
          }
        />
        <Route
          path="/shop/:catRace/page/:pageNumber"
          element={
            <>
              <Shop />
              <Pagination
                totalPages={Math.ceil(totalPagesOfRace.length / 10)}
                previousButtonText="Previous"
                nextButtonText="Next"
                partialRoute="/shop/:catRace/page/"
                paramName="pageNumber"
              />
            </>
          }
        />
        <Route
          path="/cat/:id"
          element={
            <>
              <CatDescription />
              <Pagination
                totalPages={totalCats}
                previousButtonText="Previous Cat"
                nextButtonText="Next Cat"
                partialRoute="/cat/"
                paramName="id"
              />
            </>
          }
        />
        <Route
          path="/favorites/page/:pageId"
          element={
            <>
              <Favorites />
              <Pagination
                totalPages={Math.ceil(totalNumberOfFavoriteCats / 10)}
                previousButtonText="Previous"
                nextButtonText="Next"
                partialRoute="/favorites/page/"
                paramName="pageId"
              />
            </>
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  )
}
