// src/layouts/header.tsx
import styled from "@emotion/styled";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.h1`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-size: 18px;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>🛒 Simple Store</Logo>
      <Nav>
        <NavLink href="/">홈</NavLink>
        <NavLink href="/products">상품</NavLink>
        <NavLink href="/cart">장바구니</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
