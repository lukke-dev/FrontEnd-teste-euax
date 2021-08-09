import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  h1 {
    font-size: 5rem;
    color: #696969;
    text-shadow: 2px 4px rgba(25, 23, 22, 0.2);
  }

  img {
    height: 200px;
    margin-top: 120px;
    transform: translateY(0px);
    animation: float 5s ease-in-out infinite;
  }

  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-30px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;
