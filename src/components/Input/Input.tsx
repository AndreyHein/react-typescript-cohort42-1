import { InputProps } from "./types";

import { InputComponent, LabelControl, PageWrapper } from "./styles";

function Input({
  disabled = false,
  error = undefined,
  id,
  name,
  type = "text",
  placeholder,
  label,
  value,
  onChange,
}: InputProps) {
  return (
    <PageWrapper>
      <LabelControl htmlFor={id}>{label}</LabelControl>
      <InputComponent
        $error={error}
        disabled={disabled}
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      ></InputComponent>
    </PageWrapper>
  );
}

export default Input;
