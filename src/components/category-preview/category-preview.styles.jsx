import styled from "styled-components";
import { Link } from "react-router-dom";

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
`;

export const Title = styled(Link)`
  font-size: 2.8rem;
  margin-bottom: 2.5rem;
  cursor: pointer;
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  @media(max-width: 811px){
    row-gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  }
`;
