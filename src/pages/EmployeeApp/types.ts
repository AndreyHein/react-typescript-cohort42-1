import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}

export interface UserDataProps {
  name: string;
  surname: string;
  age: string;
  jobPosition: string;
}
