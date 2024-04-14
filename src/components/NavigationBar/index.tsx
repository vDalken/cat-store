import { useDispatch, useSelector } from 'react-redux'
import { Hamburger } from '../Hamburger'
import { Nav, Ul, NavigationLink } from './styles'
import { useLocation, useNavigate } from 'react-router-dom'
import { RootState } from '../../app/store'
import { setSelectedCatRace } from '../../features/cats/catsSlice'

export const NavigationBar = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const isAtCats = useSelector((state: RootState) => state.component.isAtCats)
  const dispatch = useDispatch()
  const currentCatUrl = useSelector(
    (state: RootState) => state.url.currentCatUrl
  )
  const currentShopUrl = useSelector(
    (state: RootState) => state.url.currentShopUrl
  )
  const handleCatsLinkClick = () => {
    if (currentCatUrl) {
      navigate(currentCatUrl)
    } else {
      navigate('/cat/1')
    }
  }

  const handleShopLinkClick = () => {
    if (currentShopUrl) {
      navigate(currentShopUrl)
    } else {
      navigate('/shop/page/1')
    }
  }

  const handleCatRaceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedRace = event.target.value
    dispatch(setSelectedCatRace(selectedRace))
    navigate(`/shop/${selectedRace}/page/1`)
  }

  return (
    <>
      <Nav>
        {/*<LogoContainer>
          <NavigationLink to="/">
            <Svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M11.954 11c3.33 0 7.057 6.123 7.632 8.716.575 2.594-.996 4.729-3.484 4.112-1.092-.271-3.252-1.307-4.102-1.291-.925.016-2.379.836-3.587 1.252-2.657.916-4.717-1.283-4.01-4.073.774-3.051 4.48-8.716 7.551-8.716zm10.793-4.39c1.188.539 1.629 2.82.894 5.27-.704 2.341-2.33 3.806-4.556 2.796-1.931-.877-2.158-3.178-.894-5.27 1.274-2.107 3.367-3.336 4.556-2.796zm-21.968.706c-1.044.729-1.06 2.996.082 5.215 1.092 2.12 2.913 3.236 4.868 1.87 1.696-1.185 1.504-3.433-.082-5.215-1.596-1.793-3.824-2.599-4.868-1.87zm15.643-7.292c1.323.251 2.321 2.428 2.182 5.062-.134 2.517-1.405 4.382-3.882 3.912-2.149-.407-2.938-2.657-2.181-5.061.761-2.421 2.559-4.164 3.881-3.913zm-10.295.058c-1.268.451-1.92 2.756-1.377 5.337.519 2.467 2.062 4.114 4.437 3.269 2.06-.732 2.494-3.077 1.377-5.336-1.125-2.276-3.169-3.721-4.437-3.27z" />
            </Svg>
          </NavigationLink>
        </LogoContainer>*/}
        <Ul>
          <li>
            <NavigationLink to="/">Homepage</NavigationLink>
          </li>
          <li>
            <div onClick={handleShopLinkClick}>
              <NavigationLink
                to="/shop/page/1"
                className={location.pathname.includes('/shop') ? 'active' : ''}
              >
                Shop
              </NavigationLink>
            </div>
          </li>
          <li>
            <div onClick={handleCatsLinkClick}>
              <NavigationLink
                to="/cat/1"
                className={
                  location.pathname.includes('/cat') && isAtCats ? 'active' : ''
                }
                onClick={handleCatsLinkClick}
              >
                Cats
              </NavigationLink>
            </div>
          </li>
          <li>
            <NavigationLink to="/favorites/page/1">Favorites</NavigationLink>
          </li>
          <select onChange={handleCatRaceChange} defaultValue="">
            <option value="" disabled>
              Select a cat race
            </option>
            <option value="Siamese">Siamese</option>
            <option value="Maine Coon">Maine Coon</option>
            <option value="Persian">Persian</option>
            <option value="Sphynx">Sphynx</option>
            <option value="Scottish Fold">Scottish Fold</option>
            <option value="Bengal">Bengal</option>
            <option value="Russian Blue">Russian Blue</option>
            <option value="Ragdoll">Ragdoll</option>
            <option value="Abyssinian">Abyssinian</option>
            <option value="British Shorthair">British Shorthair</option>
          </select>
        </Ul>
        <Hamburger />
      </Nav>
    </>
  )
}
