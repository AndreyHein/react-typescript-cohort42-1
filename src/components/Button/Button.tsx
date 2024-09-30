import { ButtonProps } from "./types";
import { ButtonComponent } from "./styles";

function Button({
  type = "button",
  name,
  onClick,
  isDeleteVariant = false,
  disabled = false,
}: ButtonProps) {
  return (
    <ButtonComponent
      $isDeleteVariant={isDeleteVariant}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {name}
    </ButtonComponent>
  );
}

export default Button;
