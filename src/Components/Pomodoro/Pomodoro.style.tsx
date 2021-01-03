import styled from "styled-components";

export const Wrapper = styled.div`
  width: 50vw;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  background-color: #efefef;
  border-radius: 10px;
  box-shadow: 0 5px 25px 0 rgba(0, 0, 0, 0.6);

  @media screen and (max-width: 960px) {
    width: 70vh;
  }

  @media screen and (max-width: 510px) {
    width: 60vh;
  }
  @media screen and (max-width: 400px) {
    width: 50vh;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
`;
