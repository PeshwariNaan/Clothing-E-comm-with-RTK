import styled from 'styled-components';

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 38rem;
  h2 {
    margin: 10px 0;
  }
  @media(max-width: 1000px ){
    width: 35rem;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;