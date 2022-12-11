import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationContainer = styled.div`
  height: 7rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.5rem;

  @media(max-width: 810px){
    margin-bottom: 1.5rem;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 7rem;
  padding: 2.5rem;

  @media(max-width: 810px){
    padding: 1rem;
  }
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media(max-width: 810px){
    margin-bottom: 1.5rem;
    width: 75%;
  }
`;

export const NavLink = styled(Link)`
  padding: 1rem 1.5rem;
  font-size: 1.5rem;
  cursor: pointer;

  @media(max-width: 810px){
    padding: 1rem 2.5rem;
  }
`;

