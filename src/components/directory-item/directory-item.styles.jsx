import styled from 'styled-components';

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  filter: grayscale(60%);
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const Body = styled.div`
  height: 12rem;
  width: 12rem;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 50%;
  justify-content: center;
  background-color: white;
  opacity: 0.7;
  position: absolute;
  h2 {
    font-weight: bold;
    margin: 0 6px 0;
    font-size: 22px;
    color: #4a4a4a;
    text-transform: uppercase;
  }
  p {
    font-weight: lighter;
    font-size: 16px;
  }
`;

export const DirectoryItemContainer = styled.div`
  // min-width: 40rem;
  width: 40rem;
  max-width: 35rem;
  max-height: 35rem;
  height: 40rem;
  //flex: 1 1 auto;
  display: flex;
  clip-path: polygon(
    30% 0%,
    70% 0%,
    100% 30%,
    100% 70%,
    70% 100%,
    30% 100%,
    0% 70%,
    0% 30%
  );
  align-items: center;
  justify-content: center;
  //margin: 0 7.5px 15px;
  margin: -3rem 0 0 0;
  overflow: hidden;
  &:first-child {
    margin-right: 7.5px;
  }
  &:last-child {
    margin-left: 7.5px;
  }
  &:hover {
    cursor: pointer;
    ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
      filter: grayscale(0%);
    }
    ${Body} {
      opacity: 0.9;
    }
  }
  @media (max-width: 1280px) {
    width: 30rem;
    height: 30rem;
  }
  @media (max-width: 1040px) {
    margin: 0.5rem 0 0 0;
  }
`;
