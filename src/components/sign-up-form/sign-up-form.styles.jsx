import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 38rem;
  h2 {
    margin: 1rem 0;
  }
  @media(max-width: 1000px ){
    width: 35rem;
  }
  @media(max-width: 800px){
    margin: 5rem 0 0 0;
  }
`;