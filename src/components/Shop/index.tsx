import { CatCard } from '../CatCard'
import { Main } from './styles'
import catData from '../../assets/data/cat_data.json'
import { Navigate, Route, Routes } from 'react-router-dom'

const ITEMS_PER_PAGE = 10

interface Cat {
  image: string
  name: string
}

export const Shop = () => {
  const catArray: Cat[] = Object.values(catData)

  const chunkArray = (arr: Cat[], size: number) => {
    return arr.reduce((acc: Cat[][], _, i: number) => {
      if (i % size === 0) {
        acc.push(arr.slice(i, i + size))
      }
      return acc
    }, [])
  }

  const pages: Cat[][] = chunkArray(catArray, ITEMS_PER_PAGE)

  return (
    <>
      <Routes>
        {pages.map((page: Cat[], index: number) => (
          <Route
            key={index}
            path={`/shop/page${index + 1}`}
            element={
              <Main>
                {page.map((cat: Cat, catIndex: number) => (
                  <CatCard key={catIndex} img={cat.image} name={cat.name} />
                ))}
              </Main>
            }
          />
        ))}
        <Route path="/shop/*" element={<Navigate to="/shop/page1" />} />
      </Routes>
    </>
  )
}
