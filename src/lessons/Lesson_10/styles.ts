import styled from "@emotion/styled";

import { colors } from "styles/colors";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 40px;
  background-color: ${colors.PRIMARY};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const SearchField = styled.div`
  margin-bottom: 16px;
`;

export const ButtonComponent = styled.button`
margin-bottom: 16px;
`;

export const ErrorComponent = styled.p`
  color: red;
  font-weight: bold;
`;


export const CardComponent = styled.div`
font-size: 24px;
font-weight: bold;
`;

export const CardItem = styled.div`
  font-size: 24px;
  font-weight: bold;
`;
