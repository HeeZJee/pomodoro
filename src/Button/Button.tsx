import React, { ReactElement } from "react";
import { StyledButton, StyledIcon, StyledIconButton } from "./Button.style";

interface iProps {
  title: string;
  icon: ReactElement;
  text?: string;
  active?: boolean;
  callback?: () => void;
}

function Button({ title, text, icon, active, callback }: iProps): ReactElement {
  if (text) {
    return (
      <StyledButton title={title} onClick={callback}>
        <StyledIcon>{icon}</StyledIcon>
        <span>{text}</span>
      </StyledButton>
    );
  }
  return (
    <StyledIconButton title={title} active={active} onClick={callback}>
      {icon}
    </StyledIconButton>
  );
}

export default Button;
