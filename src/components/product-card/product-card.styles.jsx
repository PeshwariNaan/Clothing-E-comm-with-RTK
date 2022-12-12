import styled from 'styled-components';

export const ProductCartContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 35rem;
  align-items: center;
  position: relative;
  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
    @media(max-width: 811px){
    height: 90%;
  }
  }
  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 25.5rem;
    display: none;
    @media(max-width: 811px){
      top: 15rem;
      width: 75%;
  }
  }
  &:hover {
    img {
      opacity: 0.8;
    }
    button {
      opacity: 0.85;
      display: flex;
    }
  }

  @media(max-width: 811px){
    height: 25rem;
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 1.8rem;
`;

export const Name = styled.span`
  width: 90%;
  margin-bottom: 1.5rem;
`;

export const Price = styled.span`
  width: 10%;
`;
