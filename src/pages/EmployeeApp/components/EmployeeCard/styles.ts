import styled from "@emotion/styled";
import { colors } from "styles/colors";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 635px; 
  height: fit-content; 
  padding: 60px; 
  gap: 30px;
  border-radius: 4px;
  background: ${colors.WHITE};
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
`;


export const CardContainer = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center; 
  height: fit-content;
  width: 100%;
  padding: 20px; 
  box-sizing: border-box; 
  background-color: ${colors.GREY};
`;

export const CardItem = styled.p`
  font-size: 24px;
  font-weight: bold
  `;