import { LayoutProps } from "pages/EmployeeApp/types";

import { useState, createContext } from "react";
import {
  LayoutWrapper,
  AppHeader,
  HeaderLink,
  HeaderLogo,
  HeaderNav,
  AppMain,
} from "./styles";

export const EmployeeContex = createContext<any>({userData:undefined, setUserData:()=>{}})
function EmployeeLaout({ children }: LayoutProps) {

  const [userData, setUserData] = useState<any>(undefined)
  return (
    <EmployeeContex.Provider value={{
      userData:userData, setUserData:setUserData
    }}>
    <LayoutWrapper>
      <AppHeader>
        <HeaderLogo>
          <HeaderNav>
            <HeaderLink
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
                textDecoration: isActive ? "underline" : "none",
              })}
              to="/createEmloyee"
            >
              Create Emloyee
            </HeaderLink>

            <HeaderLink
              style={({ isActive }) => ({
                fontWeight: isActive ? "bold" : "normal",
                textDecoration: isActive ? "underline" : "none",
              })}
              to="/employees"
            >
              Employees
            </HeaderLink>
          </HeaderNav>
        </HeaderLogo>
      </AppHeader>
      <AppMain>{children}</AppMain>
    </LayoutWrapper>
    </EmployeeContex.Provider>
  );
}
export default EmployeeLaout;
