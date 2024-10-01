import styled from "@emotion/styled";

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  gap: 40px;
  padding: 100px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 30px;
  min-width: 700px;
  max-width: 100%;
  height: fit-content;
  padding: 40px;
  border: 2px solid black;
  border-radius: 4px;
`;

export const ButtonControl = styled.div`
  width: 200px;
`;

export const IngredientsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const IngredientTitle = styled.p`
  font-size: 40px;
  font-weight: bold;
  color: purple;
`;

export const IngredientComponent = styled.li`
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
`;

