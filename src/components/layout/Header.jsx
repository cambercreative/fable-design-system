import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.colors.background};
  box-shadow: ${props => props.theme.shadows.sm};
  position: sticky;
  top: 0;
  z-index: 100;
`;

const HeaderContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${props => props.theme.spacing.md} ${props => props.theme.spacing.xl};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${props => props.theme.colors.textPrimary};
  font-weight: 700;
  font-size: 1.25rem;
  
  &:hover {
    text-decoration: none;
  }
`;

const LogoIcon = styled.span`
  width: 32px;
  height: 32px;
  background-color: ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.borderRadius.sm};
  margin-right: ${props => props.theme.spacing.sm};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
`;

const Nav = styled.nav`
  display: flex;
  gap: ${props => props.theme.spacing.lg};
`;

const NavLink = styled(Link)`
  color: ${props => props.active ? props.theme.colors.primary : props.theme.colors.textSecondary};
  text-decoration: none;
  font-weight: ${props => props.active ? '600' : '400'};
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: ${props => props.theme.colors.primary};
    transform: scaleX(${props => props.active ? 1 : 0});
    transform-origin: bottom left;
    transition: transform 0.3s ease-out;
  }
  
  &:hover {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    
    &:after {
      transform: scaleX(1);
    }
  }
`;

function Header() {
  const location = useLocation();
  
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Logo to="/">
          <LogoIcon>F</LogoIcon>
          Fable Design System
        </Logo>
        <Nav>
          <NavLink to="/" active={location.pathname === '/' ? 1 : 0}>
            Home
          </NavLink>
          <NavLink to="/components" active={location.pathname === '/components' ? 1 : 0}>
            Components
          </NavLink>
          <NavLink to="/guidelines" active={location.pathname === '/guidelines' ? 1 : 0}>
            Guidelines
          </NavLink>
          <NavLink to="/resources" active={location.pathname === '/resources' ? 1 : 0}>
            Resources
          </NavLink>
        </Nav>
      </HeaderContainer>
    </HeaderWrapper>
  );
}

export default Header;