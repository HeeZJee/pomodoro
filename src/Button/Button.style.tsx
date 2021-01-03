import styled from "styled-components";

export const StyledButton = styled.button`
  padding: 1rem 2rem;
  margin: 0 1rem;
  border: 0;
  font-size: 16px;
  font-weight: bolder;
  letter-spacing: 1px;
  border-radius: 2rem;
  background-color: rgb(106, 89, 157);
  color: #efefef;
  cursor: pointer;
  outline: 0;
  outline-color: transparent;
  box-shadow: inset 0 -2px 0px 2px rgb(0, 0, 0, 0.5);

  :active {
    box-shadow: 0 0 0 0 #fff;
  }
`;

export const StyledIcon = styled.span`
  padding-right: 0.5rem;
`;
