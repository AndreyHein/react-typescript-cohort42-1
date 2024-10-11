import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const CompanyNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 30px;
  height: 100%;
`;

export const CompanyLink = styled(Link)`
  color: black;
  font-size: 20px;
  text-decoration: none;
  font-weight: normal;
`;