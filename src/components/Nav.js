import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";

import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const NavContainer = styled.nav`

`;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;
const InnerNav = styled.div` 
list-style-type:none;
display:flex;
justify-content:space-between;
cursor:pointer;
align-items: center;



`;
const Logo = styled.h1``;

const Left = styled.div`
  display: flex;
  gap: 1em;
  padding-top:3em;

`;

const Right = styled.div``;

const SearchContainer = styled.div`
  border: 2px solid black;
  border-radius: 5px;
  width: fit-content;
  display: flex;
  align-items: center;
  padding: 0.5em;
  height:fit-content;
`;
const SearchInput = styled.input`
  padding: .5em 2em;
  border: none;
  outline: none;
`;

const NavUl = styled.ul`
list-style-type:none;
display:flex;
gap:4em;
color:white;
`;

const NavList = styled.li``;

const Nav=() =>{
  return (
    <NavContainer>
      <Container>
        <InnerNav>
          <Left>
            <Logo>Magoso Ent</Logo>
            <SearchContainer>
              <SearchIcon />
              <SearchInput type="text" placeholder="search" />
            </SearchContainer>
          </Left>
          <Right>
            <NavUl>
            <NavList> <li><a href="./Home.js">Home</a></li></NavList>
              <NavList> <li><a href="Shop.js">Shop</a></li></NavList>
              <NavList><li><a href="./About.js">About</a></li></NavList>
              <NavList> <li><a href="Login/register.js">login/register</a></li></NavList>
              <NavList> <li><a href="Contact.js">Contact</a></li></NavList>
             <NavList><li><i class="fa-solid fa-cart-shopping"></i></li></NavList>
              
              <NavList>
            <Badge badgeContent={0} color="secondary">
    <ShoppingCartIcon/>
  </Badge></NavList>
  </NavUl>
          </Right>
        </InnerNav>
      </Container>
    </NavContainer>
  );
}
export default Nav;

