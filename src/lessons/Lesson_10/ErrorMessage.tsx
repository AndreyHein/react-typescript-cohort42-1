import { ErrorComponent } from "./styles";
import { ErrorMessageProps } from "./types";

function ErrorMessage({ message }: ErrorMessageProps) {
  return <ErrorComponent>{message}</ErrorComponent>;
}

export default ErrorMessage;
