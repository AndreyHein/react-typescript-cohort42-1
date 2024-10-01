import styled from "@emotion/styled";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 600px;
  min-height: 400px;
  background-color: #f5f5f5;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 30px;
  margin: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 400px;
`;

export const TextInfo = styled.h3`
  font-size: 20px;
  color: #333;
  padding: 20px;
`;

export const JokeInfo = styled.p`
  font-size: 18px;
  color: #555;
  font-style: italic;
  padding: 0 20px 20px;
`;