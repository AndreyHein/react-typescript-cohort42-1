import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}
export enum EMPLOYEE_APP_ROUTES {
  CREATE_EMPLOYEE = "/createEmployee",
  EMPLOYEES = "/employees",
  // CONTACT_US = "/contactUs",
  // LOGIN = "/login",
  // CLIENTS = "/clients",
  // GOOGLE = "/clients/google",
  // GMAIL = "/clients/gmail",
  // EDGE = "/clients/edge",
  // NOT_FOUND = "*",
}