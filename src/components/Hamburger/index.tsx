import { useState } from "react";
import { Icon, ItemLink, List, MenuLabel, NavBackground, Navigation } from "./styles";

export function Hamburger() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
      <>
        <MenuLabel htmlFor="navi-toggle" onClick={handleClick}>
          <Icon clicked={click}>&nbsp;</Icon>
        </MenuLabel>
        <NavBackground clicked={click}>&nbsp;</NavBackground>
  
        <Navigation clicked={click}>
          <List>
            <li>
              <ItemLink onClick={handleClick} to="/">
                Home
              </ItemLink>
            </li>
            <li>
              <ItemLink onClick={handleClick} to="/about">
                About
              </ItemLink>
            </li>
            <li>
              <ItemLink onClick={handleClick} to="/portfolio">
                Portfolio
              </ItemLink>
            </li>
            <li>
              <ItemLink onClick={handleClick} to="/blog">
                Blog
              </ItemLink>
            </li>
            <li>
              <ItemLink onClick={handleClick} to="/contact">
                Contact Us
              </ItemLink>
            </li>
          </List>
        </Navigation>
      </>
    );
  }