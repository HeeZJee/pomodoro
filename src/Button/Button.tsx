import React, { ReactElement } from "react";
import { StyledButton, StyledIcon } from "./Button.style";

interface iProps {
  title: string;
  text: string;
  icon?: ReactElement;
}

function Button({ title, text, icon }: iProps): ReactElement {
  return (
    <StyledButton title={title}>
      <StyledIcon>{icon}</StyledIcon>
      {text}
    </StyledButton>
  );
}

export default Button;
