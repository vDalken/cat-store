import { Route, Routes } from 'react-router-dom'
import { Homepage } from './components/Homepage'
import { GlobalStyle } from './styles'
import { Shop } from './components/Shop'
import { NavigationBar } from './components/NavigationBar'

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path='/shop/*' element={<Shop />}/>
        {/*create route for path /shop/page1,2,3 and for path cat/catId*/}
      </Routes>
    </>
  )
}
