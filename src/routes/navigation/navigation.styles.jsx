import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 8rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.5rem;
  background-color: #aaa6c3;

  @media (max-width: 810px) {
    margin-bottom: 1.5rem;
  }
`;

export const LogoContainer = styled(Link)`
  margin-top: 0.5rem;
  margin-left: 3rem;

  .logo {
    height: 7rem;
    width: 7rem;
  }

  /* @media (max-width: 810px) {
    padding: 1rem;
  } */
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 810px) {
    margin-bottom: 1.5rem;
    width: 75%;
  }
`;

export const NavLink = styled(Link)`
  padding: 1rem 1.5rem;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 810px) {
    padding: 1rem 2.5rem;
  }
`;
