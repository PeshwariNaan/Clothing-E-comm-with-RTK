import styled from 'styled-components';

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 5rem;
  @media(max-width: 811px){
    column-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    row-gap: 3rem;
  }
`;

export const Title = styled.h2`
  font-size: 3.8rem;
  margin-bottom: 2.5rem;
  text-align: center;
`;