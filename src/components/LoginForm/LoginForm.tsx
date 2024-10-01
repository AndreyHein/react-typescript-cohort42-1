import Button from "../Button/Button";
import Input from "../Input/Input";
import { InputComponent, LoginFormContainer, TitleComponent } from "./styles";

function LoginForm() {
  return (
    <LoginFormContainer>
      <TitleComponent>Login form</TitleComponent>
      <InputComponent>
        <Input
          id="login-email"
          label="Email"
          placeholder="Enter your email"
          name="email"
        />
        <Input
          id="login-password"
          label="Password"
          placeholder="Enter your password"
          name="password"
          type="password"
        />
      </InputComponent>
      <Button onClick={() => {}} type="submit" name="Login" />
    </LoginFormContainer>
  );
}

export default LoginForm;
