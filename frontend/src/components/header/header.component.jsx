import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderContainer = styled.div`
  background-color: #1360ef;
  height: 72px;
  display: flex;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.6);
`;

const BrandContainer = styled.div`
  flex: 2;
  font-size: 24px;
  color: #fff;
  /* justify-content: center; */
  align-items: center;
  font-weight: 500;
  padding: 20px 0 15px 15px;
`;

const NavBarContainer = styled.div`
  flex: 1;
  display: flex;
  color: #fff;
  align-items: center;
`;

const NavLink = styled(Link)`
  color: #fff;
  font-size: 18px;
  margin: 10px;
  text-decoration: none;

  :hover {
    color: #000;
  }
`;

const Header = () => {
  const [link, setLink] = useState([
    { name: "Shop", url: "/" },
    { name: "Cart", url: "/cart" },
    { name: "Order", url: "/order" },
    { name: "Add product", url: "/addproduct" },
  ]);

  return (
    <HeaderContainer>
      <BrandContainer>Training</BrandContainer>
      <NavBarContainer>
        {link.map((singleLink, index) => {
          return <NavLink to={singleLink.url}>{singleLink.name}</NavLink>;
        })}
      </NavBarContainer>
    </HeaderContainer>
  );
};

export default Header;
