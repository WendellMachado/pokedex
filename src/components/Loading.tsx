import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const PokeballLoader = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(to bottom, red 50%, white 50%);
  border: 5px solid #333;
  position: relative;
  animation: ${spin} 1s linear infinite;

  &:before {
    content: '';
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #ffffff;
    border: 5px solid #333;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    border-top: 2px solid black;
    z-index: 10;
  }
`;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loading = () => (
  <LoaderWrapper>
    <PokeballLoader />
  </LoaderWrapper>
);
