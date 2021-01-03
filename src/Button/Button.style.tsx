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

interface iIconProps {
  active?: boolean;
}

export const StyledIconButton = styled.button<iIconProps>`
  margin-top: 5px;
  border: 1px solid rgb(106, 89, 157);
  border-radius: 3rem;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  outline: 0;
  outline-color: transparent;
  transition: all ease 0.3s;
  background-color: ${({ active }) => active && `rgba(106, 89, 157, 0.5)`};

  :hover {
    background-color: rgba(106, 89, 157, 0.2);
  }
  :active {
    background-color: rgba(106, 89, 157, 0.5);
  }
`;
