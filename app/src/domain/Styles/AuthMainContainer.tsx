import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100%;
  margin-top: 80px;

  .reset-arrow-back {
    transform: translate(0, -1px);
  }

  @media (max-width: 800px) {
    .form-content {
      width: 50%;
    }
  }

  @media (max-width: 400px) {
    width: 100%;

    .signup-text1, .form-content {
      width: 100%;
    }
  }
`;

export default Main;
