import styled from 'styled-components';

export const AuthenticationContainer = styled.div`
  display: flex;
  width: 90rem;
  justify-content: space-between;
  margin: 3rem auto;
  @media(max-width: 1000px){
    justify-content: none;
    width: 100%;
  }

  @media(max-width: 800px){
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
`;