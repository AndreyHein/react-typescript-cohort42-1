import styled from "@emotion/styled";
export const CardComponent = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: fit-content;
  gap: 30px;
  padding: 30px;
  border: 2px solid black;
  border-radius: 8px;
  background-color: rgb(193, 191, 188);
  box-shadow: 10px 5px 5px rgb(70, 178, 214);
`;

export const CardItem = styled.div`
  font-size: 24px;
  font-weight: bold;
`;
