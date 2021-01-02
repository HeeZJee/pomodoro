import styled from "styled-components";

export const Wrapper = styled.div`
  width: 50vw;
  height: 70vh;
  display: flex;
  background-color: #efefef;
  border-radius: 10px;
  box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.5);

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
