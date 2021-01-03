import React, { ReactElement } from "react";
import { StyledButton, StyledIcon, StyledIconButton } from "./Button.style";

interface iProps {
  title: string;
  icon: ReactElement;
  text?: string;
  active?: boolean;
}

function Button({ title, text, icon, active }: iProps): ReactElement {
  if (text) {
    return (
      <StyledButton title={title}>
        <StyledIcon>{icon}</StyledIcon>
        <span>{text}</span>
      </StyledButton>
    );
  }
  return (
    <StyledIconButton title={title} active={active}>
      {icon}
    </StyledIconButton>
  );
}

export default Button;
