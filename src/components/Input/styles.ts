import styled from "@emotion/styled";
import { colors } from "styles/colors";

interface InputComponentStyleProps {
  $error: undefined | string;
}

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const LabelControl = styled.label`
  font-size: 16px;
  color: hsl(0, 0%, 44%);
`;

export const InputComponent = styled.input<InputComponentStyleProps>`
  width: 100%;
  height: 50px;
  border: ${({ $error, disabled }) => {
    if (disabled) {
      return `1px solid ${colors.DISABLED}`;
    } else {
      if ($error !== undefined) {
        return `2px solid ${colors.ERROR}`;
      } else {
        return "1px solid #3f3f3f";
      }
    }
  }};
  border-radius: 4px;
  padding: 12px;
  outline: none;

  &::placeholder {
    color: #6f6f6f;
    font-size: 16px;
  }
`;
