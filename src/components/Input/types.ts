import { HTMLInputTypeAttribute, ChangeEvent } from "react";

export interface InputProps {
  disabled?: boolean;
  error?: undefined | string;
  id: string;
  name: string;
  type?: HTMLInputTypeAttribute | undefined;
  placeholder: string;
  label?: string;
  value?:string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
