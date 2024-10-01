import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  padding: 50px;
  gap: 30px;
`;

export const CardTitle = styled.h1`
  color: purple;
  font-size: 40px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 500px;
  height: fit-content;
  border: 2px solid black;
  border-radius: 6px;
  padding: 40px;
`;

export const CardInfo = styled.p`
  font-size: 24px;
`;
