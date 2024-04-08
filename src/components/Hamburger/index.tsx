import { useState } from "react";
import { Icon, ItemLink, List, MenuLabel, NavBackground, Navigation } from "./styles";

export function Hamburger() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
      <>
        <MenuLabel htmlFor="navi-toggle" onClick={handleClick}>
          <Icon $clicked={click}>&nbsp;</Icon>
        </MenuLabel>
        <NavBackground $clicked={click}>&nbsp;</NavBackground>
  
        <Navigation $clicked={click}>
          <List>
            <li>
              <ItemLink onClick={handleClick} to="/">
                Homepage
              </ItemLink>
            </li>
            <li>
              <ItemLink onClick={handleClick} to="/shop/page1">
                Shop
              </ItemLink>
            </li>
            <li>
              <ItemLink onClick={handleClick} to="/cat/1">
                Cats
              </ItemLink>
            </li>
            <li>
              <ItemLink onClick={handleClick} to="/favorites"> {/*to make deploy*/}
                Favorites
              </ItemLink>
            </li>
          </List>
        </Navigation>
      </>
    );
  }