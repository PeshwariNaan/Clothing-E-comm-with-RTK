import styled from 'styled-components';
import { SpinnerContainer } from '../spinner/spinner.styles';
export const BaseButton = styled.button`
  min-width: 16rem;
  width: auto;
  height: 5rem;
  letter-spacing: 0.5px;
  line-height: 5rem;
  padding: 0 3, 5rem 0 3.5rem;
  font-size: 1.5rem;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: 'Roboto Condensed';
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 811px) {
    font-size: 1.25rem;
  }

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
  @media (max-width: 811px) {
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
  @media (max-width: 811px) {
  }
`;

export const ButtonSpinner = styled(SpinnerContainer)`
  width: 3rem;
  height: 3rem;
`;
