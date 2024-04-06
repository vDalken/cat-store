import { Route, Routes } from 'react-router-dom'
import { Homepage } from './components/Homepage'
import { GlobalStyle } from './styles'
import { NavigationBar } from './components/NavigationBar'
import catsData from './assets/data/cat_data.json'
import Shop from './components/Shop'
import { Pagination } from './components/Pagination'
import CatDescription from './components/CatDescription'
import { Footer } from './components/Footer'

export const App: React.FC = () => {
  const catsArray = Object.values(catsData)
  const totalCats = catsArray.length
  const totalPages = Math.ceil(totalCats / 10)

  return (
    <>
      <GlobalStyle />
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cat-store" element={<Homepage />} />
        {[...Array(totalPages)].map((_, index) => (
          <Route
            key={index + 1}
            path={`/shop/page${index + 1}`}
            element={
              <>
                <Shop cats={catsArray} page={index + 1} />
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
                <CatDescription id={i.toString()} />
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
      </Routes>
      <Footer />
    </>
  )
}
