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
  width: 400px;
`;

export const SearchField = styled.div`
  margin-bottom: 16px;
`;

export const ButtonComponent = styled.div`
  margin-bottom: 16px;
`;

export const CardComponent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 10px;
  width: 400px;
  min-height: 400px;
  padding: 30px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: white;
  margin-bottom: 16px;
`;

export const ErrorComponent = styled.p`
  font-size: 32px;
  color: red;
  font-weight: bold;
  text-align: center;
`;

export const CardItem = styled.div`
  font-size: 24px;
  font-weight: bold;
`;
