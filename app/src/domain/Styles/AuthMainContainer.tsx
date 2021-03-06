import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  justify-content: center;
  text-align: center;
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1000px;
  margin-top: 80px;

  @media (max-width: 400px) {
    width: 80%;

    .signup-text1, .form-content {
      width: 100%;
    }
  }
`;

export default Main;
