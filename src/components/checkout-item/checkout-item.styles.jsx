import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 1.5rem 0;
  font-size: 2rem;
  align-items: center;

  @media(max-width: 800px){
    font-size: 1.5rem;
  }
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 1.5rem;
  img {
    width: 100%;
    height: 100%;
  }
  @media(max-width: 800px){
    padding-right: 1rem;
  }
`;

export const BaseSpan = styled.span`
  width: 23%;
`;

export const Quantity = styled(BaseSpan)`
  display: flex;
 
`;

export const Arrow = styled.div`
  cursor: pointer;

`;

export const Value = styled.span`
  margin: 0 1rem;
`;

export const RemoveButton = styled.div`
  padding-left: 1.2rem;
  cursor: pointer;
`;