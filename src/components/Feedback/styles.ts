import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
    width: 600px;
    height: fit-content;
    border: 1px solid white;
    border-radius: 10px;
    padding: 30px;
    background-color: rgb(26, 35, 53);
    color: white;
`;

const feedbackContainerStyles = css`
      display: flex;
    align-items: center;
    width: 100%;
`;

export const FeedbackControl = styled.div`
  ${feedbackContainerStyles}
  gap: 20px;
`;
  
export const ButtonCountControl = styled.div`
  ${feedbackContainerStyles}
  gap: 10px;
`;
  
export const CountControl = styled.p`
  font-size: 40px;
  color: white;
`;
