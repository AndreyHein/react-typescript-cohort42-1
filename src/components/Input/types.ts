import { HTMLInputTypeAttribute } from "react";

export interface InputProps {
  disabled?: boolean;
  error?: undefined | string;
  id: string;
  name: string;
  type?: HTMLInputTypeAttribute | undefined;
  placeholder: string;
  label?: string;
}
